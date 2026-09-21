// Tauri 后端入口: 文件系统 command(替代 Electron 的 ipcMain) + umg:// 协议。
mod android;
mod archive;
mod bundle;
mod fs;
mod hardware;
mod handshake;
mod paths;
mod protocol;
mod stats;

use std::sync::{Arc, Mutex};
use std::time::Instant;

use tauri::http::status::StatusCode;
use tauri::http::{header, Response};
use tauri::{Emitter, Manager};

use bundle::{fs_bundle_tree, fs_tree_sig};
use hardware::{hw_connect, hw_disconnect, hw_init, hw_list_ports, hw_status};
use fs::{debug_probe, fs_file, fs_list, fs_read, fs_size, fs_write};
use handshake::{diag, handshake};
use paths::{read_all, read_range, size_of};
use protocol::{mime_from_path, parse_range, parse_uri};

// 是否已授予「所有文件访问」; 未授予时 Documents 下的补丁文件夹列举为空
#[tauri::command]
fn storage_access() -> bool {
    #[cfg(target_os = "android")]
    return android::has_all_files_access();
    #[cfg(not(target_os = "android"))]
    return true;
}

// 打开系统「所有文件访问」设置页
#[tauri::command]
fn open_storage_access_settings() -> bool {
    #[cfg(target_os = "android")]
    return android::open_all_files_settings();
    #[cfg(not(target_os = "android"))]
    return false;
}

// 按 assets/core/config 设置窗口模式与尺寸
#[tauri::command]
fn apply_window_config(
    window: tauri::Window,
    mode: Option<String>,
    size: Option<String>,
) -> bool {
    let mut ok = false;
    if let Some(m) = mode.as_deref() {
        ok = true;
        // set_fullscreen 仅桌面可用; 移动端全屏由 AndroidManifest / iOS 处理
        #[cfg(desktop)]
        let _ = window.set_fullscreen(m == "fullscreen");
        #[cfg(not(desktop))]
        let _ = m;
    }
    {
        if let Some(s) = size.as_deref() {
            if let Some((w, h)) = s.split_once('x') {
                if let (Ok(w), Ok(h)) = (w.trim().parse::<f64>(), h.trim().parse::<f64>()) {
                    let _ = window.set_size(tauri::Size::Logical(tauri::LogicalSize::new(w, h)));
                    ok = true;
                }
            }
        }
    }
    ok
}

// 当前窗口是否全屏(供宿主在掉出全屏时恢复)
#[tauri::command]
fn window_fullscreen(window: tauri::Window) -> bool {
    window.is_fullscreen().unwrap_or(false)
}

// 重启应用(授权后需要完整重扫追加数据)
#[tauri::command]
fn restart_app_cmd() -> bool {
    #[cfg(target_os = "android")]
    return android::restart_app();
    #[cfg(not(target_os = "android"))]
    return false;
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    stats::spawn_reporter();
    // 窗口拖动检测: 拖动时暂停前端渲染,缓解 WebView2 拖动卡顿
    let last_move: Arc<Mutex<Option<Instant>>> = Arc::new(Mutex::new(None));

    tauri::Builder::default()
        .manage(hardware::HardwareState::default())
        .setup(|app| {
            // 桌面: release 把存档放「文档/UMIGURI」、资源读打包目录;
            // debug 用仓库内的 dist/userdata 与 assets/。Android 的可写层由
            // android.rs 的 default_data_root() 决定(Documents/UMIGURI), 这里不接管。
            #[cfg(not(target_os = "android"))]
            {
                if cfg!(debug_assertions) {
                    eprintln!(
                        "[umg] data root = {} | asset root = {} (debug: 仓库内)",
                        paths::data_root().display(),
                        paths::asset_root().display()
                    );
                } else {
                    // 打包资源: tauri.conf.json 的 bundle.resources -> resource_dir()/game_data
                    match app.path().resource_dir() {
                        Ok(dir) => {
                            let assets = dir.join("game_data");
                            eprintln!("[umg] asset root = {} (bundle resources)", assets.display());
                            paths::set_asset_root(assets);
                        }
                        Err(e) => eprintln!("[umg] resource_dir 解析失败, 回退默认: {e}"),
                    }
                    // 存档/配置: 「文档」目录下的 UMIGURI/(与 Android 的 Documents/UMIGURI 一致,
                    // 用户可见、便于备份迁移); 解析失败回退 app_data_dir。
                    match app.path().document_dir().map(|d| d.join("UMIGURI")) {
                        Ok(root) => {
                            let _ = std::fs::create_dir_all(&root);
                            eprintln!("[umg] data root = {} (Documents)", root.display());
                            paths::set_data_root(root);
                        }
                        Err(e) => {
                            eprintln!("[umg] document_dir 解析失败({e}), 回退 app_data_dir");
                            match app.path().app_data_dir() {
                                Ok(dir) => {
                                    let _ = std::fs::create_dir_all(&dir);
                                    eprintln!("[umg] data root = {} (app_data_dir)", dir.display());
                                    paths::set_data_root(dir);
                                }
                                Err(e2) => eprintln!("[umg] app_data_dir 也失败, 回退默认: {e2}"),
                            }
                        }
                    }
                }
            }
            if let Some(win) = app.get_webview_window("main") {
                // 从 tauri.conf.json 读取窗口尺寸配置(不硬编码)
                let (w, h) = app
                    .config()
                    .app
                    .windows
                    .iter()
                    .next()
                    .map(|wc| (wc.width, wc.height))
                    .unwrap_or((1920.0, 1080.0));
                let _ = win.set_size(tauri::Size::Logical(tauri::LogicalSize::new(w, h)));
                let _ = win.set_min_size(Some(tauri::Size::Logical(tauri::LogicalSize::new(
                    960.0, 540.0,
                ))));
                // 启动时自动打开 DevTools(仅调试构建)
                #[cfg(debug_assertions)]
                win.open_devtools();
            }
            Ok(())
        })
        .on_window_event({
            let last_move = last_move.clone();
            move |window, event| {
                if let tauri::WindowEvent::Moved(_) = event {
                    let was_moving = last_move.lock().unwrap().is_some();
                    *last_move.lock().unwrap() = Some(Instant::now());
                    if !was_moving {
                        let _ = window.emit("umg-moving", true);
                    }
                    let last_move = last_move.clone();
                    let win = window.clone();
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
        .register_asynchronous_uri_scheme_protocol("umg", |_ctx, request, responder| {
            let vpath = parse_uri(&request.uri().to_string());
            let mime = mime_from_path(&vpath);
            // HTTP Range: 只读需要的区间, 避免把整个归档读进内存/传给 WebView。
            let total = size_of(&vpath);
            let range_header = request
                .headers()
                .get(header::RANGE)
                .and_then(|v| v.to_str().ok())
                .map(|s| s.to_string());
            let range = range_header
                .as_deref()
                .and_then(|spec| parse_range(spec, total.unwrap_or(0)));

            if let (Some(total), Some((start, end))) = (total, range) {
                let len = (end - start + 1) as usize;
                let t0 = Instant::now();
                if let Some(data) = read_range(&vpath, start, len) {
                    let el = t0.elapsed();
                    stats::record(&vpath, data.len(), el, true);
                    if el.as_millis() >= 50 {
                        eprintln!("[umg][read] {} range {}-{} {}B {}ms", vpath, start, end, data.len(), el.as_millis());
                    }
                    let resp: Response<Vec<u8>> = Response::builder()
                        .status(StatusCode::PARTIAL_CONTENT)
                        .header(header::ACCESS_CONTROL_ALLOW_ORIGIN, "*")
                        .header(header::CACHE_CONTROL, "no-store")
                        .header(header::CONTENT_TYPE, mime)
                        .header(header::ACCEPT_RANGES, "bytes")
                        .header(
                            header::CONTENT_RANGE,
                            format!("bytes {}-{}/{}", start, end, total),
                        )
                        .header(header::CONTENT_LENGTH, data.len())
                        .body(data)
                        .unwrap();
                    let _ = responder.respond(resp);
                    return;
                }
            }

            // Range 无法满足 -> 416(不能回退成整文件, 否则等于把归档全传一遍)
            if range_header.is_some() {
                if let Some(total) = total {
                    let resp: Response<Vec<u8>> = Response::builder()
                        .status(StatusCode::RANGE_NOT_SATISFIABLE)
                        .header(header::ACCESS_CONTROL_ALLOW_ORIGIN, "*")
                        .header(header::CACHE_CONTROL, "no-store")
                        .header(header::ACCEPT_RANGES, "bytes")
                        .header(header::CONTENT_RANGE, format!("bytes */{}", total))
                        .body(Vec::new())
                        .unwrap();
                    let _ = responder.respond(resp);
                    return;
                }
            }

            let t0 = Instant::now();
            match read_all(&vpath) {
                Some(data) => {
                    let el = t0.elapsed();
                    stats::record(&vpath, data.len(), el, false);
                    if el.as_millis() >= 50 {
                        eprintln!("[umg][read] {} full {}B {}ms", vpath, data.len(), el.as_millis());
                    }
                    let resp: Response<Vec<u8>> = Response::builder()
                        .status(StatusCode::OK)
                        .header(header::ACCESS_CONTROL_ALLOW_ORIGIN, "*")
                        .header(header::CACHE_CONTROL, "no-store")
                        .header(header::CONTENT_TYPE, mime)
                        .header(header::ACCEPT_RANGES, "bytes")
                        .header(header::CONTENT_LENGTH, data.len())
                        .body(data)
                        .unwrap();
                    let _ = responder.respond(resp);
                }
                None => {
                    eprintln!("[umg][404] {}", vpath);
                    stats::record(&vpath, 0, t0.elapsed(), false); // 404 也计入, 便于统计真实请求数
                    let resp: Response<Vec<u8>> = Response::builder()
                        .status(StatusCode::NOT_FOUND)
                        .header(header::ACCESS_CONTROL_ALLOW_ORIGIN, "*")
                        .header(header::CACHE_CONTROL, "no-store")
                        .body(Vec::new())
                        .unwrap();
                    let _ = responder.respond(resp);
                }
            }
        })
        .invoke_handler(tauri::generate_handler![
            fs_list,
            fs_file,
            fs_size,
            fs_read,
            fs_write,
            fs_bundle_tree,
            fs_tree_sig,
            handshake,
            diag,
            debug_probe,
            storage_access,
            open_storage_access_settings,
            restart_app_cmd,
            apply_window_config,
            window_fullscreen,
            hw_init,
            hw_connect,
            hw_disconnect,
            hw_status,
            hw_list_ports
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
