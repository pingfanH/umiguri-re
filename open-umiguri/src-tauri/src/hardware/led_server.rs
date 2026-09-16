//! UMIGURI LED 服务端。移植自 chu2board/src/umiguri.rs。
//!
//! UMIGURI 作为 **WebSocket 客户端** 连 `ws://localhost:<led_controller.port>`(默认 8090),
//! 本模块接收其 LED 数据后转成手台串口的 0xB2 帧(96 字节 = 32 格 RGB)驱动灯光。
//!
//! 协议: packet = [Version(0x01)][Command][PayloadLength][Payload]
//!   0x10 SetLED / 0x11 Initialize / 0x19 Ready / 0x12 Ping / 0x1A Pong
//!   0xD0 RequestServerInfo / 0xD8 ReportServerInfo
use std::sync::atomic::AtomicBool;
use std::sync::{Arc, Mutex};
use std::thread::JoinHandle;

use crate::hardware::mapping::LedOrder;
use crate::hardware::serial::SharedConn;

#[cfg(not(target_os = "android"))]
pub use imp::start;

#[cfg(target_os = "android")]
pub fn start(
    _addr: &str,
    _running: Arc<AtomicBool>,
    _conn: SharedConn,
    _order: Arc<Mutex<LedOrder>>,
    _client_connected: Arc<AtomicBool>,
) -> anyhow::Result<Option<JoinHandle<()>>> {
    Ok(None)
}

#[cfg(not(target_os = "android"))]
mod imp {
    use super::*;

    const VERSION: u8 = 0x01;
    const CMD_SET_LED: u8 = 0x10;
    const CMD_INITIALIZE: u8 = 0x11;
    const CMD_PING: u8 = 0x12;
    const CMD_READY: u8 = 0x19;
    const CMD_PONG: u8 = 0x1A;
    const CMD_REQUEST_SERVER_INFO: u8 = 0xD0;
    const CMD_REPORT_SERVER_INFO: u8 = 0xD8;
    use crate::hardware::mapping::build_led_frame;
    use anyhow::{Context, Result};
        use std::net::{TcpListener, TcpStream};
    use std::sync::atomic::Ordering;
    use std::thread::{self};
    use std::time::Duration;
    use tungstenite::{accept, Message};

    /// 启动 LED 服务端(监听 `addr`), 返回线程句柄。
    pub fn start(
        addr: &str,
        running: Arc<AtomicBool>,
        conn: SharedConn,
        order: Arc<Mutex<LedOrder>>,
        client_connected: Arc<AtomicBool>,
    ) -> Result<Option<JoinHandle<()>>> {
        let listener = TcpListener::bind(addr).with_context(|| format!("灯光服务端绑定失败: {addr}"))?;
        listener.set_nonblocking(true).ok();
        let addr = addr.to_string();
        let handle = thread::Builder::new()
            .name("umg-led-server".into())
            .spawn(move || {
                eprintln!("[umg][hw] LED 服务端监听 {addr}");
                while running.load(Ordering::Relaxed) {
                    match listener.accept() {
                        Ok((stream, _)) => {
                            let conn = Arc::clone(&conn);
                            let order = Arc::clone(&order);
                            let running = Arc::clone(&running);
                            let cc = Arc::clone(&client_connected);
                            thread::spawn(move || {
                                if let Err(e) = handle_client(stream, &conn, &order, &running, &cc) {
                                    eprintln!("[umg][hw] LED 客户端断开: {e:#}");
                                }
                                cc.store(false, Ordering::Relaxed);
                            });
                        }
                        Err(ref e) if e.kind() == std::io::ErrorKind::WouldBlock => {
                            thread::sleep(Duration::from_millis(50));
                        }
                        Err(e) => {
                            eprintln!("[umg][hw] LED 服务端 accept 错误: {e}");
                            thread::sleep(Duration::from_millis(100));
                        }
                    }
                }
                eprintln!("[umg][hw] LED 服务端已停止");
            })?;
        Ok(Some(handle))
    }

    fn handle_client(
        stream: TcpStream,
        conn: &SharedConn,
        order: &Arc<Mutex<LedOrder>>,
        running: &Arc<AtomicBool>,
        client_connected: &Arc<AtomicBool>,
    ) -> Result<()> {
        stream.set_nonblocking(false).ok();
        let mut ws = accept(stream).context("WebSocket 握手失败")?;
        client_connected.store(true, Ordering::Relaxed);
        eprintln!("[umg][hw] UMIGURI LED 客户端已连接");
        let mut first_led = true;
        while running.load(Ordering::Relaxed) {
            let msg = ws.read().context("读取 WebSocket 失败")?;
            match msg {
                Message::Binary(data) => {
                    if data.len() < 3 || data[0] != VERSION {
                        continue;
                    }
                    let cmd = data[1];
                    let payload_len = data[2] as usize;
                    let payload = &data[3..];
                    if payload.len() != payload_len {
                        eprintln!("[umg][hw] LED 包长度不符: 声明 {payload_len} 实际 {}", payload.len());
                        continue;
                    }
                    match cmd {
                        CMD_PING => {
                            let mut out = vec![VERSION, CMD_PONG, 6];
                            out.extend_from_slice(&payload[..payload.len().min(4)]);
                            out.extend_from_slice(&[0x51, 0xED]);
                            ws.send(Message::Binary(out)).ok();
                        }
                        CMD_INITIALIZE => {
                            eprintln!("[umg][hw] LED Initialize");
                            ws.send(Message::Binary(vec![VERSION, CMD_READY, 0])).ok();
                        }
                        CMD_SET_LED => {
                            if first_led {
                                first_led = false;
                                let has = conn.lock().unwrap().is_some();
                                eprintln!(
                                    "[umg][hw] 收到 SetLED(len={}), 手台串口: {}",
                                    payload.len(),
                                    if has { "已连接" } else { "未连接(无法驱动灯光)" }
                                );
                            }
                            apply_led(payload, conn, order);
                        }
                        CMD_REQUEST_SERVER_INFO => {
                            ws.send(Message::Binary(build_server_info())).ok();
                        }
                        _ => {}
                    }
                }
                Message::Close(_) => break,
                _ => {}
            }
        }
        Ok(())
    }

    fn build_server_info() -> Vec<u8> {
        let mut p = vec![0u8; 44];
        let name = b"umiguri-re";
        p[..name.len()].copy_from_slice(name);
        p[16..18].copy_from_slice(&1u16.to_le_bytes());
        p[18..20].copy_from_slice(&0u16.to_le_bytes());
        let hw = b"chu2board-compat";
        p[22..22 + hw.len()].copy_from_slice(hw);
        p[38..40].copy_from_slice(&3u16.to_le_bytes());
        p[40..42].copy_from_slice(&0u16.to_le_bytes());
        let mut out = vec![VERSION, CMD_REPORT_SERVER_INFO, 44];
        out.extend_from_slice(&p);
        out
    }

    /// 把 SetLED 载荷转成 32 格 RGB 并写串口
    fn apply_led(payload: &[u8], conn: &SharedConn, order: &Arc<Mutex<LedOrder>>) {
        let o = *order.lock().unwrap();
        let Some(frame) = build_led_frame(payload, o) else {
            return;
        };
        if let Some(c) = conn.lock().unwrap().as_ref() {
            let _ = c.write_led(&frame);
        }
    }
}
