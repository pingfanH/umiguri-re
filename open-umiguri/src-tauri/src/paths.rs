// 虚拟路径 -> 真实路径映射与文件解析(磁盘可写覆盖 -> APK 只读资产)。
use std::path::{Path, PathBuf};

// 虚拟路径 -> game_data 相对路径(仅做前缀映射)
// 注意: 游戏会拿 fs_list 返回的 fullPath 再拼接, 因此必须归一化:
// 折叠重复斜杠、去掉首尾斜杠(否则会得到 "/data/nameplates//xxx/" 这种双斜杠路径,
// AssetManager 不认, 目录列举会失败)。
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

pub enum Src {
    Disk(PathBuf),
    Apk(String),
    // 归档合成: 磁盘上是「解包目录」(.una/.arc 目录), 读取时按需合成归档字节。
    // dev 用: assets/ 保持解密解包态, 只有 release/Android 才预打包。
    Synth { dir: PathBuf, p2: u8 },
}

// 可写层根目录(存档/配置写入处)。优先级:
//   UMIGURI_DATA_DIR(env) > 启动时解析的系统用户目录 > 仓库内 dist/userdata(仅 debug 兜底)
//
// release 构建不能再用编译期路径(env!("CARGO_MANIFEST_DIR")): 那会把打包机器的路径
// 烘焙进二进制, 用户机器上不存在 -> 存档写不进去。因此 release 用系统标准位置:
//   macOS   ~/Library/Application Support/<identifier>/
//   Windows %APPDATA%\<identifier>\
//   Linux   $XDG_DATA_HOME/<identifier>/ (默认 ~/.local/share/<identifier>/)
// 由 lib.rs 的 setup() 通过 Tauri 的 app_data_dir() 解析后写入这里。
static DATA_ROOT: std::sync::OnceLock<PathBuf> = std::sync::OnceLock::new();

#[cfg(not(target_os = "android"))]
pub fn set_data_root(dir: PathBuf) {
    let _ = DATA_ROOT.set(dir);
}

pub fn data_root() -> PathBuf {
    if let Ok(dir) = std::env::var("UMIGURI_DATA_DIR") {
        return PathBuf::from(dir);
    }
    if let Some(d) = DATA_ROOT.get() {
        return d.clone();
    }
    default_data_root()
}

// 只读资源根目录。env UMIGURI_ASSETS_DIR 可覆盖。
// 桌面调试(dev): 直接读解密解包态 assets/ —— 无需打包, .una/.arc 目录由 archive.rs
// 按需合成归档字节; 打包构建(release / Android)才用 dist/game_data 的预打包产物。
// Android 无此层(直接读 APK assets)。
// 只读资源根目录。优先级:
//   UMIGURI_ASSETS_DIR(env) > 启动时解析的打包资源目录 > 仓库内(debug: assets/, 其它: dist/game_data)
// release 桌面构建把 dist/game_data 作为 bundle resources 打进去(见 tauri.conf.json 的
// bundle.resources), 由 lib.rs 的 setup() 通过 app.path().resource_dir() 解析后写入这里 ——
// 否则会退回编译期路径(构建机器上的 dist/game_data), 用户机器上不存在。
static ASSET_ROOT: std::sync::OnceLock<PathBuf> = std::sync::OnceLock::new();

#[cfg(not(target_os = "android"))]
pub fn set_asset_root(dir: PathBuf) {
    let _ = ASSET_ROOT.set(dir);
}

#[cfg(not(target_os = "android"))]
pub fn asset_root() -> PathBuf {
    if let Ok(dir) = std::env::var("UMIGURI_ASSETS_DIR") {
        return PathBuf::from(dir);
    }
    if let Some(d) = ASSET_ROOT.get() {
        return d.clone();
    }
    let root = PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .to_path_buf();
    if cfg!(debug_assertions) {
        let loose = root.join("assets");
        if loose.is_dir() {
            return loose;
        }
    }
    root.join("dist").join("game_data")
}

// 桌面: 可写层独立于构建产物, 避免 npm run build:assets 清掉存档。
#[cfg(not(target_os = "android"))]
fn default_data_root() -> PathBuf {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .join("dist")
        .join("userdata")
}

// Android: 见 android::default_data_root(已是可写层)
#[cfg(target_os = "android")]
fn default_data_root() -> PathBuf {
    crate::android::default_data_root()
}

// 磁盘读取顺序: 可写层(覆盖/存档) -> 只读资源(桌面)。Android 只有可写层(其余走 APK)。
pub fn disk_roots() -> Vec<PathBuf> {
    #[cfg(not(target_os = "android"))]
    {
        vec![data_root(), asset_root()]
    }
    #[cfg(target_os = "android")]
    {
        vec![data_root()]
    }
}


#[cfg(not(target_os = "android"))]
pub fn apk_size(_rel: &str) -> Option<u64> {
    None
}
#[cfg(not(target_os = "android"))]
pub fn apk_read_range(_rel: &str, _offset: u64, _size: usize) -> Option<Vec<u8>> {
    None
}
#[cfg(not(target_os = "android"))]
pub fn apk_list(_rel: &str) -> Vec<String> {
    vec![]
}

#[cfg(target_os = "android")]
pub use crate::android::{apk_list, apk_read_range, apk_size};

// 折叠重复斜杠并去掉首斜杠(保留尾斜杠, 否则 PATH_MAP 里 "config/" 这类前缀匹配不上)
fn collapse_vpath(vpath: &str) -> String {
    let normalized = vpath.replace('\\', "/");
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
    collapsed
}

pub fn vpath_to_rel(vpath: &str) -> String {
    let candidate = collapse_vpath(vpath);
    let candidate = candidate.trim_start_matches('/');
    for (prefix, real) in PATH_MAP {
        if candidate.starts_with(prefix) {
            let rest = candidate[prefix.len()..].trim_matches('/');
            return format!("{}{}", real, rest);
        }
    }
    candidate.trim_matches('/').to_string()
}

// 语言包回退: 游戏会按顺序探测多个语言包(实测 zh-CN -> exField -> 基础包), 本地化包里
// 没有的文件才回退到基础包。同一份内容游戏要多花 1~2 个往返(实测每启动 300 次 404)。
// 宿主按同样顺序在同一请求内解析, 结果一致但省掉失败探测。
const PACK_FALLBACK: &[(&str, &[&str])] = &[
    (
        "reverie_zh-CN/",
        &["core/una/zh-CN.una/", "core/una/hiiragi.una/", "core/una/natsukawa.una/"],
    ),
    (
        "reverie_exField/",
        &["core/una/natsukawa.una/", "core/una/hiiragi.una/", "core/una/zh-CN.una/"],
    ),
    (
        "reverie_en-US/",
        &["core/una/sakuragi.una/", "core/una/hiiragi.una/"],
    ),
    ("reverie/", &["core/una/hiiragi.una/", "core/una/natsukawa.una/"]),
];

// 按回退顺序给出所有可能的真实相对路径
fn rel_bases(vpath: &str) -> Vec<String> {
    let candidate = collapse_vpath(vpath);
    let candidate = candidate.trim_start_matches('/');
    for (prefix, dirs) in PACK_FALLBACK {
        if candidate.starts_with(prefix) {
            let rest = candidate[prefix.len()..].trim_matches('/');
            return dirs.iter().map(|d| format!("{d}{rest}")).collect();
        }
    }
    vec![vpath_to_rel(vpath)]
}

// 解密脚本(decrypt_arc.js)曾为每个文件重复追加一次扩展名,
// 导致磁盘上文件名为双扩展名(startup.rsb.rsb / _VERSION.txt)。
// 读取时按 exact -> name.ext.ext -> name.txt 依次尝试。
pub fn rel_candidates(vpath: &str) -> Vec<String> {
    let mut out: Vec<String> = Vec::new();
    for base in rel_bases(vpath) {
        out.push(base.clone());
        if let Some(ext) = Path::new(&base).extension().and_then(|e| e.to_str()) {
            out.push(format!("{base}.{ext}"));
        }
        out.push(format!("{base}.txt"));
    }
    out.dedup();
    out
}

// 解析顺序: 可写层 -> 只读资源 -> APK assets。
// 注意: 覆盖层在重装后可能残留旧 uid 拥有的文件(不可读),
// 因此磁盘候选必须是「确实可读的文件」, 否则继续回退。
pub fn resolve_src(vpath: &str) -> Option<Src> {
    let roots = disk_roots();
    for rel in rel_candidates(vpath) {
        for root in &roots {
            let disk = root.join(&rel);
            if disk.is_file() && std::fs::File::open(&disk).is_ok() {
                return Some(Src::Disk(disk));
            }
        }
        if apk_size(&rel).is_some() {
            return Some(Src::Apk(rel));
        }
        for root in &roots {
            let disk = root.join(&rel);
            // .una/.arc 的解包目录 == 归档: 按需合成(dev 文件夹态)
            if disk.is_dir() {
                if let Some(p2) = crate::archive::archive_p2(&rel) {
                    return Some(Src::Synth { dir: disk, p2 });
                }
                return Some(Src::Disk(disk)); // 普通目录: 由上层返回错误
            }
            if disk.exists() {
                return Some(Src::Disk(disk)); // 不可读: 由上层返回错误
            }
        }
    }
    None
}

// 写入路径(始终落磁盘, 不解压覆盖)
pub fn write_path(vpath: &str) -> PathBuf {
    data_root().join(vpath_to_rel(vpath))
}

pub fn read_all(vpath: &str) -> Option<Vec<u8>> {
    match resolve_src(vpath)? {
        Src::Disk(p) => std::fs::read(p).ok(),
        Src::Apk(rel) => {
            let len = apk_size(&rel)? as usize;
            apk_read_range(&rel, 0, len)
        }
        Src::Synth { dir, p2 } => crate::archive::dir_archive(&dir, p2).map(|b| b.as_ref().clone()),
    }
}

// 文件大小(磁盘或 APK)
pub fn size_of(vpath: &str) -> Option<u64> {
    match resolve_src(vpath)? {
        Src::Disk(p) => std::fs::metadata(p).ok().map(|m| m.len()),
        Src::Apk(rel) => apk_size(&rel),
        Src::Synth { dir, p2 } => crate::archive::dir_archive(&dir, p2).map(|b| b.len() as u64),
    }
}

// 按范围读取(供 umg:// 的 HTTP Range) —— 不把整个归档读进内存。
pub fn read_range(vpath: &str, offset: u64, size: usize) -> Option<Vec<u8>> {
    match resolve_src(vpath)? {
        Src::Disk(p) => {
            use std::io::{Read, Seek, SeekFrom};
            let mut f = std::fs::File::open(&p).ok()?;
            if offset > 0 {
                f.seek(SeekFrom::Start(offset)).ok()?;
            }
            let mut buf = vec![0u8; size];
            let mut read = 0usize;
            while read < size {
                match f.read(&mut buf[read..]) {
                    Ok(0) => break,
                    Ok(n) => read += n,
                    Err(_) => return None,
                }
            }
            buf.truncate(read);
            Some(buf)
        }
        Src::Apk(rel) => apk_read_range(&rel, offset, size),
        Src::Synth { dir, p2 } => {
            let bytes = crate::archive::dir_archive(&dir, p2)?;
            let start = (offset as usize).min(bytes.len());
            let end = (start + size).min(bytes.len());
            Some(bytes[start..end].to_vec())
        }
    }
}
