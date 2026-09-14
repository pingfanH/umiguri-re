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

// Android: 游戏数据打进 APK 的 assets/game_data/。
// 读取顺序: 可写层(见 default_data_root) -> APK 资产。默认【不解压】。
//
// 可写层(存档/配置 + data 的额外补丁 + core 的缓存/覆盖)放在用户可见的公共目录:
//   /storage/emulated/0/Documents/UMIGURI/{core,data,terms,caches}
// 拿不到「所有文件访问」权限时依次回退到 应用外部私有目录 -> 内部 files。
#[cfg(target_os = "android")]
const APK_ASSET_BASE: &str = "game_data";

#[cfg(target_os = "android")]
fn java_path_of(env: &mut jni::JNIEnv, obj: jni::objects::JObject) -> Option<PathBuf> {
    if obj.is_null() {
        return None;
    }
    let p = env
        .call_method(obj, "getAbsolutePath", "()Ljava/lang/String;", &[])
        .ok()?
        .l()
        .ok()?;
    let s: String = env.get_string(&p.into()).ok()?.into();
    Some(PathBuf::from(s))
}

// 公共 Documents 目录(多为 /storage/emulated/0/Documents)
#[cfg(target_os = "android")]
fn env_public_documents() -> Option<PathBuf> {
    use jni::objects::{JString, JValue};
    let ctx = tauri::tao::platform::android::prelude::main_android_context()?;
    let vm = unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) }.ok()?;
    let mut env = vm.attach_current_thread().ok()?;
    let cls = env.find_class("android/os/Environment").ok()?;
    let key: JString = env.new_string("Documents").ok()?;
    let file = env
        .call_static_method(
            &cls,
            "getExternalStoragePublicDirectory",
            "(Ljava/lang/String;)Ljava/io/File;",
            &[JValue::Object(&key)],
        )
        .ok()?
        .l()
        .ok()?;
    java_path_of(&mut env, file)
}

// 应用外部私有目录(/storage/emulated/0/Android/data/<pkg>/files)
#[cfg(target_os = "android")]
fn android_external_files_dir() -> Option<PathBuf> {
    use jni::objects::{JObject, JValue};
    let ctx = tauri::tao::platform::android::prelude::main_android_context()?;
    let vm = unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) }.ok()?;
    let mut env = vm.attach_current_thread().ok()?;
    let context = unsafe { JObject::from_raw(ctx.context_jobject.cast()) };
    let null = JObject::null();
    let file = env
        .call_method(
            context,
            "getExternalFilesDir",
            "(Ljava/lang/String;)Ljava/io/File;",
            &[JValue::Object(&null)],
        )
        .ok()?
        .l()
        .ok()?;
    java_path_of(&mut env, file)
}

#[cfg(target_os = "android")]
fn ensure_writable(dir: &Path) -> bool {
    if std::fs::create_dir_all(dir).is_err() {
        return false;
    }
    let probe = dir.join(".umg_write_test");
    match std::fs::write(&probe, b"1") {
        Ok(_) => {
            let _ = std::fs::remove_file(&probe);
            true
        }
        Err(_) => false,
    }
}

#[cfg(target_os = "android")]
fn ensure_layout(root: &Path) {
    for d in ["core", "data", "terms", "caches"] {
        let _ = std::fs::create_dir_all(root.join(d));
    }
}

#[cfg(target_os = "android")]
fn default_data_root() -> PathBuf {
    // 旧行为(可选): 首启把 APK 资产解压到内部目录
    if std::env::var("UMG_EXTRACT").as_deref() == Ok("1") {
        if let Some(files) = android_files_dir() {
            let dst = files.join("game_data");
            if !dst.join("core").is_dir() {
                match extract_apk_assets(APK_ASSET_BASE, &dst) {
                    Ok(n) => eprintln!("[umg] game_data extracted ({n} files) -> {}", dst.display()),
                    Err(e) => eprintln!("[umg] extract game_data failed: {e}"),
                }
            }
            return dst;
        }
    }
    // 1) 公共 Documents/UMIGURI
    if let Some(docs) = env_public_documents() {
        let root = docs.join("UMIGURI");
        if ensure_writable(&root) {
            eprintln!("[umg] data root = {} (Documents)", root.display());
            ensure_layout(&root);
            return root;
        }
        eprintln!(
            "[umg] Documents 不可写(可能缺「所有文件访问」权限): {}",
            root.display()
        );
    }
    // 2) 应用外部私有目录
    if let Some(ext) = android_external_files_dir() {
        let root = ext.join("UMIGURI");
        if ensure_writable(&root) {
            eprintln!("[umg] data root = {} (external files)", root.display());
            ensure_layout(&root);
            return root;
        }
    }
    // 3) 内部 files
    let files = android_files_dir().unwrap_or_else(|| PathBuf::from("/data/local/tmp/umg_no_data"));
    eprintln!("[umg] data root = {} (internal)", files.display());
    ensure_layout(&files);
    files
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

// ============ APK assets 只读访问(免解压) ============
// .una/.arc 在 build.gradle.kts 里声明为 noCompress -> 以 Stored 入包,
// 因此可用 AAsset 做 seek/偏移读, 满足游戏的 fs_size/fs_read 语义。

#[cfg(target_os = "android")]
fn asset_manager_ptr() -> Option<*mut ndk_sys::AAssetManager> {
    use std::sync::OnceLock;
    static PTR: OnceLock<Option<usize>> = OnceLock::new();
    PTR.get_or_init(|| {
        let ctx = tauri::tao::platform::android::prelude::main_android_context()?;
        let vm = unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) }.ok()?;
        let mut env = vm.attach_current_thread().ok()?;
        let context = unsafe { jni::objects::JObject::from_raw(ctx.context_jobject.cast()) };
        let java_am = env
            .call_method(context, "getAssets", "()Landroid/content/res/AssetManager;", &[])
            .ok()?
            .l()
            .ok()?;
        let p = unsafe {
            ndk_sys::AAssetManager_fromJava(env.get_native_interface(), java_am.as_raw())
        };
        if p.is_null() { None } else { Some(p as usize) }
    })
    .map(|x| x as *mut ndk_sys::AAssetManager)
}

#[cfg(target_os = "android")]
fn apk_open(rel: &str) -> Option<ndk::asset::Asset> {
    use std::ffi::CString;
    use std::ptr::NonNull;
    let ptr = asset_manager_ptr()?;
    let am = unsafe { ndk::asset::AssetManager::from_ptr(NonNull::new(ptr)?) };
    let c = CString::new(format!("{APK_ASSET_BASE}/{rel}")).ok()?;
    am.open(&c)
}

#[cfg(target_os = "android")]
fn apk_size(rel: &str) -> Option<u64> {
    apk_open(rel).map(|a| a.length() as u64)
}

#[cfg(target_os = "android")]
fn apk_read_range(rel: &str, offset: u64, size: usize) -> Option<Vec<u8>> {
    use std::io::{Read, Seek, SeekFrom};
    let mut a = apk_open(rel)?;
    if offset > 0 {
        a.seek(SeekFrom::Start(offset)).ok()?;
    }
    let mut buf = vec![0u8; size];
    let mut read = 0usize;
    while read < size {
        match a.read(&mut buf[read..]) {
            Ok(0) => break,
            Ok(n) => read += n,
            Err(_) => return None,
        }
    }
    buf.truncate(read);
    Some(buf)
}

#[cfg(target_os = "android")]
fn apk_list(rel: &str) -> Vec<String> {
    use jni::objects::{JObjectArray, JString, JValue};
    let ctx = match tauri::tao::platform::android::prelude::main_android_context() {
        Some(c) => c,
        None => return vec![],
    };
    let vm = match unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) } {
        Ok(v) => v,
        Err(_) => return vec![],
    };
    let mut env = match vm.attach_current_thread() {
        Ok(e) => e,
        Err(_) => return vec![],
    };
    let context = unsafe { jni::objects::JObject::from_raw(ctx.context_jobject.cast()) };
    let java_am = match env
        .call_method(context, "getAssets", "()Landroid/content/res/AssetManager;", &[])
        .and_then(|v| v.l())
    {
        Ok(a) => a,
        Err(_) => return vec![],
    };
    let full = if rel.is_empty() {
        APK_ASSET_BASE.to_string()
    } else {
        format!("{APK_ASSET_BASE}/{rel}")
    };
    let jpath: JString = match env.new_string(full) {
        Ok(s) => s,
        Err(_) => return vec![],
    };
    let arr = match env
        .call_method(
            &java_am,
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

// 非 Android: 无 APK 资产
#[cfg(not(target_os = "android"))]
fn apk_size(_rel: &str) -> Option<u64> {
    None
}
#[cfg(not(target_os = "android"))]
fn apk_read_range(_rel: &str, _offset: u64, _size: usize) -> Option<Vec<u8>> {
    None
}
#[cfg(not(target_os = "android"))]
fn apk_list(_rel: &str) -> Vec<String> {
    vec![]
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
// 读取时按 exact -> name.ext.ext -> name.txt 依次尝试。

// 虚拟路径 -> game_data 相对路径(仅做前缀映射)
// 注意: 游戏会拿 fs_list 返回的 fullPath 再拼接, 因此必须归一化:
// 折叠重复斜杠、去掉首尾斜杠(否则会得到 "/data/nameplates//xxx/" 这种双斜杠路径,
// AssetManager 不认, 目录列举会失败)。
fn vpath_to_rel(vpath: &str) -> String {
    let normalized = vpath.replace('\\', "/");
    // 只折叠重复斜杠(保留尾斜杠, 否则 PATH_MAP 里 "config/" 这类前缀匹配不上)
    let mut collapsed = String::with_capacity(normalized.len());
    let mut prev_slash = false;
    for ch in normalized.chars() {
        if ch == '/' {
            if prev_slash {
                continue;
            }
            prev_slash = true;
        } else {
            prev_slash = false;
        }
        collapsed.push(ch);
    }
    let candidate = collapsed.trim_start_matches('/');
    for (prefix, real) in PATH_MAP {
        if candidate.starts_with(prefix) {
            let rest = candidate[prefix.len()..].trim_matches('/');
            return format!("{}{}", real, rest);
        }
    }
    candidate.trim_matches('/').to_string()
}

fn rel_candidates(vpath: &str) -> Vec<String> {
    let base = vpath_to_rel(vpath);
    let mut out = vec![base.clone()];
    if let Some(ext) = Path::new(&base).extension().and_then(|e| e.to_str()) {
        out.push(format!("{base}.{ext}"));
    }
    out.push(format!("{base}.txt"));
    out
}

pub enum Src {
    Disk(PathBuf),
    Apk(String),
}

// 解析顺序: 磁盘(可写覆盖, 存档优先) -> APK assets(只读)
// 注意: Documents 覆盖层在重装后可能残留旧 uid 拥有的文件(不可读),
// 因此磁盘候选必须是「确实可读的文件」, 否则继续回退到 APK。
fn resolve_src(vpath: &str) -> Option<Src> {
    let root = data_root();
    for rel in rel_candidates(vpath) {
        let disk = root.join(&rel);
        if disk.is_file() && std::fs::File::open(&disk).is_ok() {
            return Some(Src::Disk(disk));
        }
        if apk_size(&rel).is_some() {
            return Some(Src::Apk(rel));
        }
        if disk.exists() {
            return Some(Src::Disk(disk)); // 目录或不可读: 由上层返回错误
        }
    }
    None
}

// 写入路径(始终落磁盘, 不解压覆盖)
fn write_path(vpath: &str) -> PathBuf {
    data_root().join(vpath_to_rel(vpath))
}

fn read_all(vpath: &str) -> Option<Vec<u8>> {
    match resolve_src(vpath)? {
        Src::Disk(p) => std::fs::read(p).ok(),
        Src::Apk(rel) => {
            let len = apk_size(&rel)? as usize;
            apk_read_range(&rel, 0, len)
        }
    }
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

// 列目录(合并: 磁盘可写目录 + APK 内置资产; 游戏只使用 name/isDirectory)
#[tauri::command]
fn fs_list(path: String) -> FsListResult {
    use std::collections::HashSet;
    let dir_rel = vpath_to_rel(&path);
    let disk = data_root().join(&dir_rel);
    let mut data: Vec<FileEntry> = Vec::new();
    let mut seen: HashSet<String> = HashSet::new();
    if let Ok(entries) = std::fs::read_dir(&disk) {
        for e in entries.flatten() {
            let name = e.file_name().to_string_lossy().to_string();
            let is_dir = e.file_type().map(|t| t.is_dir()).unwrap_or(false);
            let is_file = e.file_type().map(|t| t.is_file()).unwrap_or(false);
            seen.insert(name.clone());
            data.push(FileEntry {
                full_path: format!("/{dir_rel}/{name}"),
                is_directory: is_dir,
                is_file,
                name,
            });
        }
    }
    let apk_entries = apk_list(&dir_rel);
    for name in &apk_entries {
        if seen.contains(name) {
            continue;
        }
        let child_rel = if dir_rel.is_empty() {
            name.clone()
        } else {
            format!("{dir_rel}/{name}")
        };
        // list() 不区分文件/目录: 能用 AAsset 打开就是文件
        let is_file = apk_size(&child_rel).is_some();
        data.push(FileEntry {
            full_path: format!("/{child_rel}"),
            is_directory: !is_file,
            is_file,
            name: name.clone(),
        });
    }
    let exists = disk.is_dir() || !apk_entries.is_empty();
    FsListResult {
        status: if exists { 0 } else { -1 },
        data,
    }
}

// 读整个文件(base64 编码,避免 Vec<u8> JSON 数组序列化开销)
#[tauri::command]
fn fs_file(path: String) -> Result<String, String> {
    let data = read_all(&path).ok_or_else(|| format!("not found: {path}"))?;
    Ok(base64::engine::general_purpose::STANDARD.encode(&data))
}

// 文件大小
#[tauri::command]
fn fs_size(path: String) -> FsSizeResult {
    match resolve_src(&path) {
        Some(Src::Disk(p)) => match std::fs::metadata(&p) {
            Ok(m) => FsSizeResult { status: 0, data: Some(m.len()) },
            Err(_) => FsSizeResult { status: -1, data: None },
        },
        Some(Src::Apk(rel)) => match apk_size(&rel) {
            Some(n) => FsSizeResult { status: 0, data: Some(n) },
            None => FsSizeResult { status: -1, data: None },
        },
        None => FsSizeResult { status: -1, data: None },
    }
}

// 读文件 offset/size(归档解密用, base64 编码)
#[tauri::command]
fn fs_read(path: String, offset: u64, size: usize) -> Result<String, String> {
    let buf = match resolve_src(&path) {
        Some(Src::Disk(p)) => {
            use std::io::{Read, Seek, SeekFrom};
            let mut f = std::fs::File::open(&p).map_err(|e| e.to_string())?;
            f.seek(SeekFrom::Start(offset)).map_err(|e| e.to_string())?;
            let mut buf = vec![0u8; size];
            let n = f.read(&mut buf).map_err(|e| e.to_string())?;
            buf.truncate(n);
            buf
        }
        Some(Src::Apk(rel)) => {
            apk_read_range(&rel, offset, size).ok_or_else(|| format!("apk read failed: {rel}"))?
        }
        None => return Err(format!("not found: {path}")),
    };
    Ok(base64::engine::general_purpose::STANDARD.encode(&buf))
}

// 写整个文件(data 为 base64 编码,存档/config 持久化用; 始终写磁盘)
#[tauri::command]
fn fs_write(path: String, data: String) -> Result<(), String> {
    let real = write_path(&path);
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
            match read_all(&vpath) {
                Some(data) => {
                    let resp: Response<Vec<u8>> = Response::builder()
                        .status(StatusCode::OK)
                        .header(header::ACCESS_CONTROL_ALLOW_ORIGIN, "*")
                        .header(header::CONTENT_TYPE, mime_from_path(&vpath))
                        .body(data)
                        .unwrap();
                    let _ = responder.respond(resp);
                }
                None => {
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
