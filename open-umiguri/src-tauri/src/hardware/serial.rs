//! 串口封装(移植自 chu2board/src/serial.rs): 枚举端口、打开、命令式读写。
//!
//! 手台是严格的「命令 → 响应」协议, 用同步 `write_cmd` + `read_exact` 实现,
//! 每帧前 `drain` 清残留字节保证帧对齐。
//!
//! Android/iOS 无串口 API(serialport 在移动端不可用), 因此本模块在移动端为桩实现。
use anyhow::Result;
use std::sync::{Arc, Mutex};

#[cfg(not(any(target_os = "android", target_os = "ios")))]
mod imp {
    pub const BAUD_RATE: u32 = 115_200;
    use std::time::Duration;
    use anyhow::{Context, Result};
    use serialport::{available_ports, SerialPort};
    use std::io::{ErrorKind, Read, Write};
    use std::sync::{Arc, Mutex};
    use std::time::Instant;

    /// 列出所有可用串口名称。
    pub fn list_ports() -> Vec<String> {
        match available_ports() {
            Ok(ports) => ports.into_iter().map(|p| p.port_name).collect(),
            Err(_) => Vec::new(),
        }
    }

    /// 连接前排序: USB 串口(手台常见)优先, 蓝牙/调试口最后, 避免逐个握手浪费时间。
    pub fn sort_for_connect(ports: &mut [String]) {
        ports.sort_by_key(|p| {
            let lower = p.to_lowercase();
            if lower.contains("bluetooth") || lower.contains("debug") {
                4
            } else if lower.contains("usbmodem")
                || lower.contains("usbserial")
                || lower.contains("wchusb")
            {
                0
            } else if lower.contains("usb") {
                1
            } else if lower.contains("tty") || lower.contains("cu") {
                2
            } else {
                3
            }
        });
    }

    #[derive(Clone)]
    pub struct Connection {
        port: Arc<Mutex<Box<dyn SerialPort>>>,
    }

    impl Connection {
        pub fn open(name: &str) -> Result<Self> {
            let port = serialport::new(name, BAUD_RATE)
                .timeout(Duration::from_millis(5))
                .open()
                .with_context(|| format!("打开串口失败: {name}"))?;
            Ok(Self {
                port: Arc::new(Mutex::new(port)),
            })
        }

        pub fn write_cmd(&self, cmd: &[u8]) -> Result<()> {
            let mut port = self.port.lock().unwrap();
            port.write_all(cmd).context("发送命令失败")?;
            port.flush().ok();
            Ok(())
        }

        /// 发送灯光: 0xB2 + 96 字节(32 格 RGB)
        pub fn write_led(&self, rgb: &[u8; 96]) -> Result<()> {
            let mut buf = [0u8; 97];
            buf[0] = crate::hardware::protocol::CMD_SET_LEDS;
            buf[1..].copy_from_slice(rgb);
            self.write_cmd(&buf)
        }

        /// 读 `buf.len()` 字节, 超时返回已读数量
        pub fn read_exact(&self, buf: &mut [u8], timeout: Duration) -> Result<usize> {
            let mut port = self.port.lock().unwrap();
            let start = Instant::now();
            let mut n = 0;
            while n < buf.len() {
                if start.elapsed() > timeout {
                    break;
                }
                match port.read(&mut buf[n..]) {
                    Ok(0) => {}
                    Ok(k) => n += k,
                    Err(ref e) if e.kind() == ErrorKind::TimedOut => continue,
                    Err(e) => return Err(e.into()),
                }
            }
            Ok(n)
        }

        /// 清空接收缓冲残留
        pub fn drain(&self) {
            let mut port = self.port.lock().unwrap();
            let mut tmp = [0u8; 256];
            loop {
                match port.read(&mut tmp) {
                    Ok(n) if n > 0 => continue,
                    _ => break,
                }
            }
        }

        /// 握手: 发 0xB0, 期待回 0xB0
        pub fn handshake(&self) -> Result<bool> {
            self.drain();
            self.write_cmd(&[crate::hardware::protocol::CMD_HANDSHAKE])?;
            let mut b = [0u8; 1];
            let n = self.read_exact(&mut b, Duration::from_millis(200))?;
            Ok(n > 0 && b[0] == crate::hardware::protocol::CMD_HANDSHAKE)
        }

        /// 查询 API 版本是否匹配
        pub fn check_api_level(&self) -> Result<bool> {
            self.write_cmd(&[crate::hardware::protocol::CMD_API_LEVEL])?;
            let mut b = [0u8; 1];
            let n = self.read_exact(&mut b, Duration::from_millis(200))?;
            Ok(n > 0 && b[0] == crate::hardware::protocol::API_LEVEL)
        }

        /// 读一帧输入(0xB1)
        pub fn read_input(&self) -> Result<crate::hardware::protocol::InputState> {
            self.write_cmd(&[crate::hardware::protocol::CMD_READ_INPUT])?;
            let mut buf = [0u8; crate::hardware::protocol::INPUT_RESPONSE_LEN];
            let n = self.read_exact(&mut buf, Duration::from_millis(30))?;
            crate::hardware::protocol::InputState::parse(&buf[..n])
                .ok_or_else(|| anyhow::anyhow!("输入帧不完整: {n}/33"))
        }
    }
}

#[cfg(any(target_os = "android", target_os = "ios"))]
mod imp {
    use super::Result;

    pub fn list_ports() -> Vec<String> {
        Vec::new()
    }

    pub fn sort_for_connect(_ports: &mut [String]) {}

    #[derive(Clone)]
    pub struct Connection;

    impl Connection {
        pub fn open(_name: &str) -> Result<Self> {
            anyhow::bail!("Android 不支持串口手台")
        }
        pub fn check_api_level(&self) -> Result<bool> {
            Ok(false)
        }
        pub fn handshake(&self) -> Result<bool> {
            Ok(false)
        }
        pub fn read_input(&self) -> Result<crate::hardware::protocol::InputState> {
            anyhow::bail!("Android 不支持串口手台")
        }
    }
}

pub use imp::{list_ports, sort_for_connect, Connection};

/// 自动连接: 按 USB 优先顺序枚举端口, 探测「握手 + API 版本」, 找到第一个手台。
/// 返回 (端口名, 连接)。
pub fn connect_auto() -> Result<(String, Connection)> {
    let mut ports = list_ports();
    if ports.is_empty() {
        anyhow::bail!("没有可用串口");
    }
    sort_for_connect(&mut ports);
    let mut last_err = String::from("未找到手台");
    for name in &ports {
        match Connection::open(name) {
            Ok(conn) => match conn.check_api_level() {
                Ok(true) => match conn.handshake() {
                    Ok(true) => return Ok((name.clone(), conn)),
                    _ => last_err = format!("{name}: 握手失败"),
                },
                Ok(false) => last_err = format!("{name}: API 版本不符"),
                Err(e) => last_err = format!("{name}: {e}"),
            },
            Err(e) => last_err = format!("{name}: {e}"),
        }
    }
    anyhow::bail!("{last_err}")
}

/// 连接指定端口(或自动)。
pub fn connect(port: Option<&str>) -> Result<(String, Connection)> {
    match port {
        Some(p) if !p.is_empty() => {
            let conn = Connection::open(p)?;
            if !conn.handshake().unwrap_or(false) {
                anyhow::bail!("{p}: 握手失败");
            }
            Ok((p.to_string(), conn))
        }
        _ => connect_auto(),
    }
}

/// 供 mod.rs 复用
pub type SharedConn = Arc<Mutex<Option<Connection>>>;
