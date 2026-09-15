// Android 平台特有实现: 可写数据根、APK assets 只读访问、权限与重启。
#![cfg(target_os = "android")]

use std::path::{Path, PathBuf};

// Android: 游戏数据打进 APK 的 assets/game_data/。
// 读取顺序: 可写层(见 default_data_root) -> APK 资产。默认【不解压】。
//
// 可写层(存档/配置 + data 的额外补丁 + core 的缓存/覆盖)放在用户可见的公共目录:
//   /storage/emulated/0/Documents/UMIGURI/{core,data,terms,caches}
// 拿不到「所有文件访问」权限时依次回退到 应用外部私有目录 -> 内部 files。
pub(crate) const APK_ASSET_BASE: &str = "game_data";

pub(crate) fn java_path_of(env: &mut jni::JNIEnv, obj: jni::objects::JObject) -> Option<PathBuf> {
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
pub(crate) fn env_public_documents() -> Option<PathBuf> {
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
pub(crate) fn android_external_files_dir() -> Option<PathBuf> {
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

// 「所有文件访问」(MANAGE_EXTERNAL_STORAGE) 是否已授予。
// 未授予时, 系统会在 readdir 中隐藏非本应用归属的目录条目(用户用文件管理器
// 拷进 Documents/UMIGURI 的补丁文件夹就属于这种情况: 文件能按已知路径打开,
// 但目录列举为空 → 游戏扫描不到追加数据)。
pub(crate) fn has_all_files_access() -> bool {
    let Some(ctx) = tauri::tao::platform::android::prelude::main_android_context() else {
        return false;
    };
    let Ok(vm) = (unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) }) else {
        return false;
    };
    let Ok(mut env) = vm.attach_current_thread() else {
        return false;
    };
    let Ok(cls) = env.find_class("android/os/Environment") else {
        return false;
    };
    env.call_static_method(&cls, "isExternalStorageManager", "()Z", &[])
        .ok()
        .and_then(|v| v.z().ok())
        .unwrap_or(false)
}

// 跳转「所有文件访问」设置页, 让用户手动授予
pub(crate) fn open_all_files_settings() -> bool {
    use jni::objects::{JObject, JString, JValue};
    let Some(ctx) = tauri::tao::platform::android::prelude::main_android_context() else {
        return false;
    };
    let Ok(vm) = (unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) }) else {
        return false;
    };
    let Ok(mut env) = vm.attach_current_thread() else {
        return false;
    };
    let context = unsafe { JObject::from_raw(ctx.context_jobject.cast()) };
    let Ok(uri_cls) = env.find_class("android/net/Uri") else {
        return false;
    };
    let Ok(uri_s) = env.new_string("package:jp.inonote.umiguri") else {
        return false;
    };
    let Ok(uri) = env
        .call_static_method(
            &uri_cls,
            "parse",
            "(Ljava/lang/String;)Landroid/net/Uri;",
            &[JValue::Object(&JString::from(uri_s).into())],
        )
        .and_then(|v| v.l())
    else {
        return false;
    };
    let Ok(settings_cls) = env.find_class("android/provider/Settings") else {
        return false;
    };
    let Ok(action) = env
        .get_static_field(
            &settings_cls,
            "ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION",
            "Ljava/lang/String;",
        )
        .and_then(|v| v.l())
    else {
        return false;
    };
    let Ok(intent_cls) = env.find_class("android/content/Intent") else {
        return false;
    };
    let Ok(intent) = env.new_object(
        &intent_cls,
        "(Ljava/lang/String;Landroid/net/Uri;)V",
        &[JValue::Object(&action), JValue::Object(&uri)],
    ) else {
        return false;
    };
    let _ = env.call_method(
        &intent,
        "addFlags",
        "(I)Landroid/content/Intent;",
        &[JValue::Int(0x10000000)], // FLAG_ACTIVITY_NEW_TASK
    );
    env.call_method(
        &context,
        "startActivity",
        "(Landroid/content/Intent;)V",
        &[JValue::Object(&intent)],
    )
    .is_ok()
}

// 重启应用(进程级): 重新拉起主 Activity 后结束当前进程
pub(crate) fn restart_app() -> bool {
    use jni::objects::{JObject, JString, JValue};
    let Some(ctx) = tauri::tao::platform::android::prelude::main_android_context() else {
        return false;
    };
    let Ok(vm) = (unsafe { jni::JavaVM::from_raw(ctx.java_vm.cast()) }) else {
        return false;
    };
    let Ok(mut env) = vm.attach_current_thread() else {
        return false;
    };
    let context = unsafe { JObject::from_raw(ctx.context_jobject.cast()) };
    let Ok(pm) = env
        .call_method(
            &context,
            "getPackageManager",
            "()Landroid/content/pm/PackageManager;",
            &[],
        )
        .and_then(|v| v.l())
    else {
        return false;
    };
    let Ok(pkg) = env.new_string("jp.inonote.umiguri") else {
        return false;
    };
    let Ok(intent) = env
        .call_method(
            &pm,
            "getLaunchIntentForPackage",
            "(Ljava/lang/String;)Landroid/content/Intent;",
            &[JValue::Object(&JString::from(pkg).into())],
        )
        .and_then(|v| v.l())
    else {
        return false;
    };
    if intent.is_null() {
        return false;
    }
    let _ = env.call_method(
        &intent,
        "addFlags",
        "(I)Landroid/content/Intent;",
        &[JValue::Int(0x10000000)], // FLAG_ACTIVITY_NEW_TASK
    );
    // 用 AlarmManager 预约 ~700ms 后拉起, 再结束当前进程。
    // 不能直接 startActivity 后杀进程: Activity 与当前进程同属一个包, 会被一起杀掉。
    let pending_flags = 0x10000000 | 0x04000000 | 0x08000000; // NEW_TASK|IMMUTABLE|UPDATE_CURRENT
    let Ok(pi_cls) = env.find_class("android/app/PendingIntent") else {
        return false;
    };
    let Ok(pi) = env
        .call_static_method(
            &pi_cls,
            "getActivity",
            "(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;",
            &[
                JValue::Object(&context),
                JValue::Int(0),
                JValue::Object(&intent),
                JValue::Int(pending_flags),
            ],
        )
        .and_then(|v| v.l())
    else {
        return false;
    };
    let Ok(am_key) = env.new_string("alarm") else {
        return false;
    };
    let Ok(am) = env
        .call_method(
            &context,
            "getSystemService",
            "(Ljava/lang/String;)Ljava/lang/Object;",
            &[JValue::Object(&JString::from(am_key).into())],
        )
        .and_then(|v| v.l())
    else {
        return false;
    };
    let now = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|d| d.as_millis() as i64)
        .unwrap_or(0);
    let _ = env.call_method(
        &am,
        "set",
        "(IJLandroid/app/PendingIntent;)V",
        &[JValue::Int(1), JValue::Long(now + 700), JValue::Object(&pi)], // RTC
    );
    if let Ok(proc_cls) = env.find_class("android/os/Process") {
        let _ = env.call_static_method(
            &proc_cls,
            "killProcess",
            "(I)V",
            &[JValue::Int(std::process::id() as i32)],
        );
    }
    true
}

pub(crate) fn ensure_writable(dir: &Path) -> bool {
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

pub(crate) fn ensure_layout(root: &Path) {
    for d in ["core", "data", "terms", "caches"] {
        let _ = std::fs::create_dir_all(root.join(d));
    }
}

pub(crate) fn default_data_root() -> PathBuf {
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

pub(crate) fn android_files_dir() -> Option<PathBuf> {
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
        if p.is_null() {
            None
        } else {
            Some(p as usize)
        }
    })
    .map(|x| x as *mut ndk_sys::AAssetManager)
}

fn apk_open(rel: &str) -> Option<ndk::asset::Asset> {
    use std::ffi::CString;
    use std::ptr::NonNull;
    let ptr = asset_manager_ptr()?;
    let am = unsafe { ndk::asset::AssetManager::from_ptr(NonNull::new(ptr)?) };
    let c = CString::new(format!("{APK_ASSET_BASE}/{rel}")).ok()?;
    am.open(&c)
}

pub(crate) fn apk_size(rel: &str) -> Option<u64> {
    apk_open(rel).map(|a| a.length() as u64)
}

pub(crate) fn apk_read_range(rel: &str, offset: u64, size: usize) -> Option<Vec<u8>> {
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

pub(crate) fn apk_list(rel: &str) -> Vec<String> {
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
    let am = unsafe {
        ndk::asset::AssetManager::from_ptr(
            NonNull::new(am_ptr)
                .ok_or_else(|| std::io::Error::new(std::io::ErrorKind::Other, "null am"))?,
        )
    };

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
