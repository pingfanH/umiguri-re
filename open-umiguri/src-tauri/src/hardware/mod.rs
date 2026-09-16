//! 手台(控制器)与灯光硬件接入。
//!
//! 结构移植自 chu2board(串口手台协议 + UMIGURI LED WebSocket 服务端), 但接入方式不同:
//!   - chu2board 把输入转成键盘事件; 本项目直接把 38 个档位写进游戏读的
//!     `window.__umgLanes`(JS 侧收到 `umg-lanes` 事件后写入), 绕开键位映射;
//!   - 灯光: 游戏自带 `ledOutput` 会连 `ws://localhost:<led_controller.port>`,
//!     本模块起服务端接收 SetLED, 再转成手台的 0xB2 帧写串口。
//!
//! Android 无串口 API, 相关命令返回“不支持”(但 LED 服务端仍可启动)。
pub mod led_server;
pub mod mapping;
pub mod protocol;
pub mod serial;

use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

use serde::Serialize;
use tauri::{AppHandle, Emitter, Manager};

use mapping::LedOrder;
use serial::SharedConn;

pub const LANES: usize = protocol::TOUCH_CHANNELS + protocol::AIR_SENSORS; // 38

pub struct HardwareState {
    conn: SharedConn,
    port: Mutex<Option<String>>,
    running: Arc<AtomicBool>,
    led_order: Arc<Mutex<LedOrder>>,
    led_client: Arc<AtomicBool>,
    input_thread: Mutex<Option<thread::JoinHandle<()>>>,
    led_thread: Mutex<Option<thread::JoinHandle<()>>>,
    led_addr: Mutex<Option<String>>,
}

impl Default for HardwareState {
    fn default() -> Self {
        Self {
            conn: Arc::new(Mutex::new(None)),
            port: Mutex::new(None),
            running: Arc::new(AtomicBool::new(false)),
            led_order: Arc::new(Mutex::new(LedOrder::default())),
            led_client: Arc::new(AtomicBool::new(false)),
            input_thread: Mutex::new(None),
            led_thread: Mutex::new(None),
            led_addr: Mutex::new(None),
        }
    }
}

#[derive(Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct HardwareStatus {
    connected: bool,
    port: Option<String>,
    led_client: bool,
    led_addr: Option<String>,
    ports: Vec<String>,
}

fn status(st: &HardwareState) -> HardwareStatus {
    HardwareStatus {
        connected: st.conn.lock().unwrap().is_some(),
        port: st.port.lock().unwrap().clone(),
        led_client: st.led_client.load(Ordering::Relaxed),
        led_addr: st.led_addr.lock().unwrap().clone(),
        ports: serial::list_ports(),
    }
}

/// 启动 LED 服务端(幂等)。ledPort 来自握手的 led_controller.port。
#[tauri::command]
pub fn hw_init(
    app: AppHandle,
    led_port: Option<u16>,
    led_order: Option<String>,
    auto_connect: Option<bool>,
) -> bool {
    let st = app.state::<HardwareState>();
    if let Some(o) = led_order.as_deref() {
        *st.led_order.lock().unwrap() = LedOrder::parse(o);
    }
    if auto_connect.unwrap_or(false) && st.conn.lock().unwrap().is_none() {
        autoconnect(app.clone());
    }
    if st.led_thread.lock().unwrap().is_some() {
        return true; // 已启动
    }
    let port = led_port.unwrap_or(8090);
    let addr = format!("127.0.0.1:{port}");
    let running = Arc::new(AtomicBool::new(true));
    match led_server::start(
        &addr,
        Arc::clone(&running),
        Arc::clone(&st.conn),
        Arc::clone(&st.led_order),
        Arc::clone(&st.led_client),
    ) {
        Ok(Some(h)) => {
            *st.led_thread.lock().unwrap() = Some(h);
            *st.led_addr.lock().unwrap() = Some(addr);
            true
        }
        Ok(None) => false, // Android: 不支持
        Err(e) => {
            eprintln!("[umg][hw] LED 服务端启动失败: {e:#}");
            false
        }
    }
}

/// 连接手台串口; port 为空时自动探测(按 USB 优先顺序 + 握手/API 版本)。
#[tauri::command]
pub fn hw_connect(app: AppHandle, port: Option<String>) -> Result<HardwareStatus, String> {
    let st = app.state::<HardwareState>();
    hw_disconnect(app.clone());
    let (name, conn) = serial::connect(port.as_deref()).map_err(|e| format!("{e:#}"))?;
    *st.conn.lock().unwrap() = Some(conn);
    *st.port.lock().unwrap() = Some(name.clone());
    st.running.store(true, Ordering::Relaxed);
    let running = Arc::clone(&st.running);
    let conn2 = Arc::clone(&st.conn);
    let app2 = app.clone();
    let handle = thread::Builder::new()
        .name("umg-hw-input".into())
        .spawn(move || input_loop(app2, conn2, running))
        .map_err(|e| e.to_string())?;
    *st.input_thread.lock().unwrap() = Some(handle);
    eprintln!("[umg][hw] 手台已连接: {name}");
    let _ = app.emit("umg-hw-status", status(&st));
    Ok(status(&st))
}

#[tauri::command]
pub fn hw_disconnect(app: AppHandle) -> bool {
    let st = app.state::<HardwareState>();
    st.running.store(false, Ordering::Relaxed);
    if let Some(h) = st.input_thread.lock().unwrap().take() {
        let _ = h.join();
    }
    *st.conn.lock().unwrap() = None;
    *st.port.lock().unwrap() = None;
    // 掉线时清空档位, 避免卡住一直按着
    let _ = app.emit("umg-lanes", vec![0u8; LANES]);
    let _ = app.emit("umg-hw-status", status(&st));
    true
}

#[tauri::command]
pub fn hw_status(app: AppHandle) -> HardwareStatus {
    let st = app.state::<HardwareState>();
    status(&st)
}

#[tauri::command]
pub fn hw_list_ports() -> Vec<String> {
    serial::list_ports()
}

/// 输入轮询: 读一帧 → 映射成 38 个档位 → 有变化才通知 JS。
fn input_loop(app: AppHandle, conn: SharedConn, running: Arc<AtomicBool>) {
    let mut prev = vec![0u8; LANES];
    let mut fail = 0u32;
    while running.load(Ordering::Relaxed) {
        let state = {
            let guard = conn.lock().unwrap();
            match guard.as_ref() {
                Some(c) => c.read_input(),
                None => break,
            }
        };
        match state {
            Ok(s) => {
                fail = 0;
                let mut lanes = vec![0u8; LANES];
                for ch in 1..=protocol::TOUCH_CHANNELS {
                    if !s.touch_pressed(ch - 1) {
                        continue;
                    }
                    if let Some(idx) = mapping::umiguri_index_of_channel(ch) {
                        lanes[idx] = 1;
                    }
                }
                for bit in 0..protocol::AIR_SENSORS {
                    if s.air_pressed(bit) {
                        lanes[mapping::umiguri_air_index(bit)] = 1;
                    }
                }
                if lanes != prev {
                    prev = lanes.clone();
                    let _ = app.emit("umg-lanes", lanes);
                }
                thread::sleep(Duration::from_millis(1));
            }
            Err(_) => {
                fail += 1;
                if fail > 30 {
                    eprintln!("[umg][hw] 输入读取连续失败, 断开手台");
                    let _ = app.emit("umg-lanes", vec![0u8; LANES]);
                    break;
                }
                thread::sleep(Duration::from_millis(10));
            }
        }
    }
}

/// 启动时按需自动连接(在后台线程里探测, 不阻塞启动)。
pub fn autoconnect(app: AppHandle) {
    thread::spawn(move || {
        let name = {
            let st = app.state::<HardwareState>();
            match serial::connect_auto() {
                Ok((name, conn)) => {
                    *st.conn.lock().unwrap() = Some(conn);
                    *st.port.lock().unwrap() = Some(name.clone());
                    st.running.store(true, Ordering::Relaxed);
                    let running = Arc::clone(&st.running);
                    let conn2 = Arc::clone(&st.conn);
                    let app2 = app.clone();
                    if let Ok(h) = thread::Builder::new()
                        .name("umg-hw-input".into())
                        .spawn(move || input_loop(app2, conn2, running))
                    {
                        *st.input_thread.lock().unwrap() = Some(h);
                    }
                    Some(name)
                }
                Err(e) => {
                    eprintln!("[umg][hw] 未连接手台: {e:#}");
                    None
                }
            }
        };
        if name.is_some() {
            let st = app.state::<HardwareState>();
            eprintln!("[umg][hw] 手台自动连接成功");
            let _ = app.emit("umg-hw-status", status(&st));
        }
    });
}
