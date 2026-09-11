// main.rs - Tauri 后端: 文件系统 command(替代 Electron 的 ipcMain)
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::path::{Path, PathBuf};
use serde::{Deserialize, Serialize};
use base64::Engine;
use tauri::http::{Request, Response};
use tauri::http::header::HeaderValue;
use tauri::http::status::StatusCode;
use tauri::Manager;
use std::sync::{Arc, Mutex};
use std::time::Instant;

// 游戏数据根目录(通过环境变量或默认路径)
fn data_root() -> PathBuf {
    if let Ok(dir) = std::env::var("UMIGURI_DATA_DIR") {
        return PathBuf::from(dir);
    }
    // 默认: 项目根目录的 UMIGURI_NEXT(source/tauri/src-tauri 上三级)
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .parent()
        .unwrap()
        .parent()
        .unwrap()
        .join("UMIGURI_NEXT")
}

// 虚拟路径 -> 真实路径映射
const PATH_MAP: &[(&str, &str)] = &[
    ("/chara/", "data/characters/"),
    ("/music/", "data/music/"),
    ("/voices/", "data/voices/"),
    ("/skills/", "data/skills/"),
    ("/courses/", "data/courses/"),
    ("/player_scenes/", "data/player_scenes/"),
    ("/nameplates/", "data/nameplates/"),
    ("/titles/", "data/titles/"),
    ("/textures/", "core/textures/"),
    ("/una/", "core/una/"),
    ("/sounds/", "core/sounds/"),
    ("/config/", "core/config/"),
    ("/extra/", "core/extra/"),
];

fn virtual_to_real(vpath: &str) -> PathBuf {
    let root = data_root();
    // Windows 盘符或 Unix 绝对路径
    if vpath.chars().nth(1) == Some(':') || Path::new(vpath).is_absolute() {
        return PathBuf::from(vpath);
    }
    for (v, r) in PATH_MAP {
        if vpath.starts_with(v) {
            return root.join(r).join(vpath[v.len()..].trim_start_matches('/'));
        }
    }
    root.join(vpath.trim_start_matches('/'))
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
struct FileEntry {
    full_path: String,
    is_directory: bool,
    is_file: bool,
    name: String,
}

#[derive(Serialize)]
struct FsListResult {
    status: i32,
    data: Vec<FileEntry>,
}

#[derive(Serialize)]
struct FsSizeResult {
    status: i32,
    data: Option<u64>,
}

// 列目录
#[tauri::command]
fn fs_list(path: String) -> FsListResult {
    let real = virtual_to_real(&path);
    match std::fs::read_dir(&real) {
        Ok(entries) => {
            let data = entries
                .filter_map(|e| e.ok())
                .map(|e| {
                    let is_dir = e.file_type().map(|t| t.is_dir()).unwrap_or(false);
                    let is_file = e.file_type().map(|t| t.is_file()).unwrap_or(false);
                    FileEntry {
                        full_path: e.path().to_string_lossy().to_string(),
                        is_directory: is_dir,
                        is_file,
                        name: e.file_name().to_string_lossy().to_string(),
                    }
                })
                .collect();
            FsListResult { status: 0, data }
        }
        Err(_) => FsListResult { status: -1, data: vec![] },
    }
}

// 读整个文件(base64 编码,避免 Vec<u8> JSON 数组序列化开销)
#[tauri::command]
fn fs_file(path: String) -> Result<String, String> {
    let real = virtual_to_real(&path);
    let data = std::fs::read(&real).map_err(|e| e.to_string())?;
    Ok(base64::engine::general_purpose::STANDARD.encode(&data))
}

// 文件大小
#[tauri::command]
fn fs_size(path: String) -> FsSizeResult {
    let real = virtual_to_real(&path);
    match std::fs::metadata(&real) {
        Ok(m) => FsSizeResult { status: 0, data: Some(m.len()) },
        Err(_) => FsSizeResult { status: -1, data: None },
    }
}

// 读文件 offset/size(归档解密用, base64 编码)
#[tauri::command]
fn fs_read(path: String, offset: u64, size: usize) -> Result<String, String> {
    use std::io::{Read, Seek, SeekFrom};
    let real = virtual_to_real(&path);
    let mut f = std::fs::File::open(&real).map_err(|e| e.to_string())?;
    f.seek(SeekFrom::Start(offset)).map_err(|e| e.to_string())?;
    let mut buf = vec![0u8; size];
    let n = f.read(&mut buf).map_err(|e| e.to_string())?;
    buf.truncate(n);
    Ok(base64::engine::general_purpose::STANDARD.encode(&buf))
}

// 握手(简化,游戏前端需要)
#[tauri::command]
fn handshake() -> serde_json::Value {
    serde_json::json!({
        "O": { "ct": "DEV_MOCK", "B": 1650000, "p9": 69 },
        "I": 0, "R": 8090, "j": 1, "M": 3, "L": 0, "U": false,
        "P": "00 00 00 00 00 00", "G": "00 00 00 00 00 00", "Y": 0,
        "fe": "A1B2C3D4E5F6G7H8I9J0K;L'M,N.O/P-RSTUWY",
        "I4": "ja-JP", "am": 0, "W": true, "H": 1, "J": true, "K": true,
        "Z": { "X": false, "a1": false, "d1": false, "t1": false, "s1": false },
        "u1": "1920x1080", "v1": false,
        "h1": { "T": "2025/05/24", "rr": "16:51:06", "C": "9f4d448", "GA": "Release", "Ph": false },
        "f1": false,
        "g1": [
            { "name": "ja-JP", "version": 6, "packageName": "hiiragi.una" },
            { "name": "en-US", "version": 6, "packageName": "sakuragi.una" },
            { "name": "exField", "version": 6, "packageName": "natsukawa.una" }
        ]
    })
}

// 诊断: 前端把日志回传到 Rust stdout
#[tauri::command]
fn diag(msg: String) {
    eprintln!("[DIAG] {}", msg);
}

// 解析 protocol URI(如 https://umg.localhost/una/hiiragi.una?v=0) -> 虚拟路径
fn percent_decode(s: &str) -> String {
    let bytes = s.as_bytes();
    let mut out: Vec<u8> = Vec::with_capacity(bytes.len());
    let mut i = 0;
    let hex = |c: u8| -> Option<u8> {
        match c {
            b'0'..=b'9' => Some(c - b'0'),
            b'a'..=b'f' => Some(c - b'a' + 10),
            b'A'..=b'F' => Some(c - b'A' + 10),
            _ => None,
        }
    };
    while i < bytes.len() {
        if bytes[i] == b'%' && i + 2 < bytes.len() {
            if let (Some(h), Some(l)) = (hex(bytes[i + 1]), hex(bytes[i + 2])) {
                out.push(h * 16 + l);
                i += 3;
                continue;
            }
        }
        out.push(bytes[i]);
        i += 1;
    }
    String::from_utf8_lossy(&out).to_string()
}

fn parse_uri(uri: &str) -> String {
    let rest = match uri.find("://") {
        Some(pos) => &uri[pos + 3..],
        None => uri,
    };
    // 去掉 query string(? 之后)
    let rest = match rest.find('?') {
        Some(pos) => &rest[..pos],
        None => rest,
    };
    let path = rest.split('/').skip(1).collect::<Vec<_>>().join("/");
    let path = percent_decode(&path);
    if path.is_empty() { "/".to_string() } else { format!("/{}", path) }
}

fn main() {
    // 窗口拖动检测: 拖动时暂停前端渲染,缓解 WebView2 拖动卡顿
    let last_move: Arc<Mutex<Option<Instant>>> = Arc::new(Mutex::new(None));

    tauri::Builder::default()
        .on_window_event({
            let last_move = last_move.clone();
            move |event| {
                if let tauri::WindowEvent::Moved(_) = event.event() {
                    let was_moving = last_move.lock().unwrap().is_some();
                    *last_move.lock().unwrap() = Some(Instant::now());
                    if !was_moving {
                        let _ = event.window().emit("umg-moving", true);
                    }
                    let last_move = last_move.clone();
                    let win = event.window().clone();
                    std::thread::spawn(move || {
                        std::thread::sleep(std::time::Duration::from_millis(200));
                        let mut lm = last_move.lock().unwrap();
                        if let Some(t) = *lm {
                            if t.elapsed() >= std::time::Duration::from_millis(200) {
                                *lm = None;
                                let _ = win.emit("umg-moving", false);
                            }
                        }
                    });
                }
            }
        })
        .register_uri_scheme_protocol("umg", |_app, request: &Request| {
            let vpath = parse_uri(request.uri());
            let real = virtual_to_real(&vpath);
            match std::fs::read(&real) {
                Ok(data) => {
                    let mut resp = Response::new(data);
                    resp.headers_mut().insert("Access-Control-Allow-Origin", HeaderValue::from_static("*"));
                    Ok(resp)
                }
                Err(_) => {
                    let mut resp = Response::new(Vec::new());
                    resp.set_status(StatusCode::NOT_FOUND);
                    resp.headers_mut().insert("Access-Control-Allow-Origin", HeaderValue::from_static("*"));
                    Ok(resp)
                }
            }
        })
        .invoke_handler(tauri::generate_handler![
            fs_list, fs_file, fs_size, fs_read, handshake, diag
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
