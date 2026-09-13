// main.rs - Tauri 后端: 文件系统 command(替代 Electron 的 ipcMain)
use std::path::{Path, PathBuf};
use serde::{Deserialize, Serialize};
use base64::Engine;
use tauri::http::{header, Response};
use tauri::http::status::StatusCode;
use tauri::{Emitter, Manager};
use std::sync::{Arc, Mutex};
use std::time::Instant;

// 游戏数据根目录(通过环境变量或默认路径)
fn data_root() -> PathBuf {
    if let Ok(dir) = std::env::var("UMIGURI_DATA_DIR") {
        return PathBuf::from(dir);
    }
    default_data_root()
}

// Android: 游戏数据打进 APK 的 assets/game_data/,首次启动解压到 app 内部 files 目录。
// 不 panic:任何失败都只记录日志。
#[cfg(target_os = "android")]
fn default_data_root() -> PathBuf {
    use std::sync::OnceLock;
    static ROOT: OnceLock<PathBuf> = OnceLock::new();
    ROOT.get_or_init(|| {
        let fallback = PathBuf::from("/data/local/tmp/umg_no_data");
        let files = match android_files_dir() {
            Some(f) => f,
            None => {
                eprintln!("[umg] android_files_dir failed");
                return fallback;
            }
        };
        let dst = files.join("game_data");
        if !dst.join("core").is_dir() {
            match extract_apk_assets("game_data", &dst) {
                Ok(n) => eprintln!("[umg] game_data extracted ({n} files) -> {}", dst.display()),
                Err(e) => {
                    eprintln!("[umg] extract game_data failed: {e}");
                    return fallback;
                }
            }
        }
        dst
    })
    .clone()
}

#[cfg(target_os = "android")]
fn android_files_dir() -> Option<PathBuf> {
    use jni::objects::JObject;
    let ctx = tauri::tao::platform::android::prelude::main_android_context()?;
    let vm = unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) }.ok()?;
    let mut env = vm.attach_current_thread().ok()?;
    let context = unsafe { JObject::from_raw(ctx.context_jobject.cast()) };
    let file = env
        .call_method(context, "getFilesDir", "()Ljava/io/File;", &[])
        .ok()?
        .l()
        .ok()?;
    let path = env
        .call_method(file, "getAbsolutePath", "()Ljava/lang/String;", &[])
        .ok()?
        .l()
        .ok()?;
    let s: String = env.get_string(&path.into()).ok()?.into();
    Some(PathBuf::from(s))
}

#[cfg(target_os = "android")]
fn extract_apk_assets(src: &str, dst: &Path) -> std::io::Result<usize> {
    use std::ffi::CString;
    use std::io::Read;
    use std::ptr::NonNull;
    let ctx = tauri::tao::platform::android::prelude::main_android_context()
        .ok_or_else(|| std::io::Error::new(std::io::ErrorKind::Other, "no android context"))?;
    let vm = unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) }
        .map_err(|e| std::io::Error::new(std::io::ErrorKind::Other, format!("jvm: {e:?}")))?;
    let mut env = vm
        .attach_current_thread()
        .map_err(|e| std::io::Error::new(std::io::ErrorKind::Other, format!("attach: {e:?}")))?;
    let context = unsafe { jni::objects::JObject::from_raw(ctx.context_jobject.cast()) };
    let java_am = env
        .call_method(context, "getAssets", "()Landroid/content/res/AssetManager;", &[])
        .map_err(|e| std::io::Error::new(std::io::ErrorKind::Other, format!("getAssets: {e:?}")))?
        .l()
        .map_err(|e| std::io::Error::new(std::io::ErrorKind::Other, format!("am obj: {e:?}")))?;
    let am_ptr =
        unsafe { ndk_sys::AAssetManager_fromJava(env.get_native_interface(), java_am.as_raw()) };
    let am = unsafe { ndk::asset::AssetManager::from_ptr(NonNull::new(am_ptr).ok_or_else(|| std::io::Error::new(std::io::ErrorKind::Other, "null am"))?) };

    // 用 Java AssetManager.list() 枚举目录。原生 AAssetManager_openDir 在部分
    // 机型上迭代不可靠(只返回第一个条目),导致解压几乎为空。
    fn list_dir(env: &mut jni::JNIEnv, am: &jni::objects::JObject, path: &str) -> Vec<String> {
        use jni::objects::{JObjectArray, JString, JValue};
        let jpath: JString = match env.new_string(path) {
            Ok(s) => s,
            Err(_) => return vec![],
        };
        let arr = match env
            .call_method(
                am,
                "list",
                "(Ljava/lang/String;)[Ljava/lang/String;",
                &[JValue::Object(&jpath)],
            )
            .and_then(|v| v.l())
        {
            Ok(a) => a,
            Err(_) => return vec![],
        };
        let arr = unsafe { JObjectArray::from_raw(arr.as_raw()) };
        let len = match env.get_array_length(&arr) {
            Ok(n) => n,
            Err(_) => return vec![],
        };
        let mut out = Vec::with_capacity(len as usize);
        for i in 0..len {
            if let Ok(obj) = env.get_object_array_element(&arr, i) {
                if let Ok(s) = env.get_string(&JString::from(obj)) {
                    out.push(s.into());
                }
            }
        }
        out
    }

    let mut n = 0usize;
    let mut stack: Vec<(String, PathBuf)> = vec![(src.to_string(), dst.to_path_buf())];
    while let Some((spath, dpath)) = stack.pop() {
        std::fs::create_dir_all(&dpath)?;
        let entries = list_dir(&mut env, &java_am, &spath);
        if spath == src {
            eprintln!("[umg] game_data top-level entries: {entries:?}");
        }
        for name in entries {
            let child = if spath.is_empty() {
                name.clone()
            } else {
                format!("{}/{}", spath, name)
            };
            let child_dst = dpath.join(&name);
            if !list_dir(&mut env, &java_am, &child).is_empty() {
                stack.push((child, child_dst));
                continue;
            }
            let c = CString::new(child).unwrap();
            if let Some(mut f) = am.open(&c) {
                let mut buf = vec![0u8; f.length() as usize];
                let read = f.read(&mut buf).unwrap_or(0);
                buf.truncate(read);
                std::fs::write(&child_dst, &buf)?;
                n += 1;
            }
        }
    }
    Ok(n)
}

// 桌面 / iOS 模拟器: 仓库根目录的 assets/(tauri/src-tauri 上两级)
#[cfg(not(target_os = "android"))]
fn default_data_root() -> PathBuf {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .parent()
        .unwrap()
        .join("assets")
}

// 虚拟路径 -> 真实路径映射(前缀不含首尾斜杠)
const PATH_MAP: &[(&str, &str)] = &[
    ("reverie/", "core/una/hiiragi.una/"),
    ("reverie_exField/", "core/una/natsukawa.una/"),
    ("reverie_en-US/", "core/una/sakuragi.una/"),
    ("reverie_zh-CN/", "core/una/zh-CN.una/"),
    ("chara/", "data/characters/"),
    ("music/", "data/music/"),
    ("voices/", "data/voices/"),
    ("skills/", "data/skills/"),
    ("courses/", "data/courses/"),
    ("player_scenes/", "data/player_scenes/"),
    ("nameplates/", "data/nameplates/"),
    ("titles/", "data/titles/"),
    ("textures/", "core/textures/"),
    ("una/", "core/una/"),
    ("sounds/", "core/sounds/"),
    ("config/", "core/config/"),
    ("extra/", "core/extra/"),
    ("terms/", "terms/"),
    ("caches/", "caches/"),
    ("license.xml", "license.xml"),
];

// 解密脚本(decrypt_arc.js)曾为每个文件重复追加一次扩展名,
// 导致磁盘上文件名为双扩展名(startup.rsb.rsb / _VERSION.txt)。
// 此处做回退: name.ext -> name.ext.ext,无扩展名 -> name.txt。
fn resolve_existing(path: &Path) -> PathBuf {
    if path.exists() {
        return path.to_path_buf();
    }
    if let Some(ext) = path.extension().and_then(|e| e.to_str()) {
        let mut doubled = path.as_os_str().to_owned();
        doubled.push(".");
        doubled.push(ext);
        let candidate = PathBuf::from(doubled);
        if candidate.exists() {
            return candidate;
        }
    }
    let mut txt = path.as_os_str().to_owned();
    txt.push(".txt");
    let candidate = PathBuf::from(txt);
    if candidate.exists() {
        return candidate;
    }
    path.to_path_buf()
}

fn virtual_to_real(vpath: &str) -> PathBuf {
    let root = data_root();
    // .rsb 内纹理引用使用 Windows 风格反斜杠路径,归一化为正斜杠
    let normalized = vpath.replace('\\', "/");
    // 真实绝对路径: Windows 盘符(D:/...) 或 Unix 绝对路径,直接使用
    if normalized.len() >= 2 && normalized.as_bytes()[1] == b':' {
        return PathBuf::from(&normalized);
    }
    if normalized.starts_with('/') {
        let p = Path::new(&normalized);
        // 已映射到真实 assets/ 下的绝对路径(来自 fs_list 返回的 full_path),直接使用
        let root_str = root.to_string_lossy();
        if normalized.starts_with(root_str.as_ref()) {
            return resolve_existing(p);
        }
    }
    let v = normalized.trim_start_matches('/');
    for (prefix, real) in PATH_MAP {
        if v.starts_with(prefix) {
            return resolve_existing(&root.join(real).join(v[prefix.len()..].trim_start_matches('/')));
        }
    }
    resolve_existing(&root.join(v))
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
                    let name = e.file_name().to_string_lossy().to_string();
                    FileEntry {
                        // 返回真实路径(与 Electron 参考实现一致,前端基于 full_path 拼接后续请求;
                        // virtual_to_real 会识别绝对路径原样返回)
                        full_path: e.path().to_string_lossy().to_string(),
                        is_directory: is_dir,
                        is_file,
                        name,
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

// 写整个文件(data 为 base64 编码,存档/config 持久化用)
#[tauri::command]
fn fs_write(path: String, data: String) -> Result<(), String> {
    let real = virtual_to_real(&path);
    let bytes = base64::engine::general_purpose::STANDARD.decode(&data).map_err(|e| e.to_string())?;
    if let Some(parent) = real.parent() {
        std::fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    std::fs::write(&real, bytes).map_err(|e| e.to_string())
}

// 握手(简化,游戏前端需要)
#[tauri::command]
fn handshake() -> serde_json::Value {
    serde_json::json!({
        "O": { "ct": "PINGFANH", "B": 1650000, "p9": 69 },
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

// 根据扩展名推断 MIME 类型(图片/音频/3D 模型需正确 content-type 才能被 WebView 渲染)
fn mime_from_path(path: &str) -> &'static str {
    let ext = path.rsplit('.').next().unwrap_or("").to_ascii_lowercase();
    match ext.as_str() {
        "png" => "image/png",
        "jpg" | "jpeg" => "image/jpeg",
        "gif" => "image/gif",
        "webp" => "image/webp",
        "svg" => "image/svg+xml",
        "wav" => "audio/wav",
        "mp3" => "audio/mpeg",
        "ogg" => "audio/ogg",
        "m4a" => "audio/mp4",
        "glb" => "model/gltf-binary",
        "gltf" => "model/gltf+json",
        "js" => "application/javascript",
        "json" => "application/json",
        "css" => "text/css",
        "html" => "text/html",
        "txt" => "text/plain",
        "xml" => "application/xml",
        "dds" => "image/vnd.ms-dds",
        _ => "application/octet-stream",
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // 窗口拖动检测: 拖动时暂停前端渲染,缓解 WebView2 拖动卡顿
    let last_move: Arc<Mutex<Option<Instant>>> = Arc::new(Mutex::new(None));

    tauri::Builder::default()
        .setup(|app| {
            if let Some(win) = app.get_webview_window("main") {
                // 从 tauri.conf.json 读取窗口尺寸配置(不硬编码)
                let (w, h) = app.config().app.windows
                    .iter().next()
                    .map(|wc| (wc.width, wc.height))
                    .unwrap_or((1920.0, 1080.0));
                let _ = win.set_size(tauri::Size::Logical(tauri::LogicalSize::new(w, h)));
                let _ = win.set_min_size(Some(tauri::Size::Logical(tauri::LogicalSize::new(960.0, 540.0))));
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
            let real = virtual_to_real(&vpath);
            match std::fs::read(&real) {
                Ok(data) => {
                    let resp: Response<Vec<u8>> = Response::builder()
                        .status(StatusCode::OK)
                        .header(header::ACCESS_CONTROL_ALLOW_ORIGIN, "*")
                        .header(header::CONTENT_TYPE, mime_from_path(&real.to_string_lossy()))
                        .body(data)
                        .unwrap();
                    let _ = responder.respond(resp);
                }
                Err(_) => {
                    let resp: Response<Vec<u8>> = Response::builder()
                        .status(StatusCode::NOT_FOUND)
                        .header(header::ACCESS_CONTROL_ALLOW_ORIGIN, "*")
                        .body(Vec::new())
                        .unwrap();
                    let _ = responder.respond(resp);
                }
            }
        })
        .invoke_handler(tauri::generate_handler![
            fs_list, fs_file, fs_size, fs_read, fs_write, handshake, diag
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
