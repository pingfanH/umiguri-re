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
}

// 游戏数据根目录(通过环境变量或默认路径)
pub fn data_root() -> PathBuf {
    if let Ok(dir) = std::env::var("UMIGURI_DATA_DIR") {
        return PathBuf::from(dir);
    }
    default_data_root()
}

// 桌面 / iOS 模拟器: 构建产物 dist/game_data(由 npm run build:assets 生成),
// 即「解密存源 assets/ -> 打包加密 dist/game_data/」。
#[cfg(not(target_os = "android"))]
fn default_data_root() -> PathBuf {
    if let Ok(dir) = std::env::var("UMIGURI_ASSETS_DIR") {
        return PathBuf::from(dir);
    }
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .unwrap()
        .join("dist")
        .join("game_data")
}

// Android: 见 android::default_data_root
#[cfg(target_os = "android")]
fn default_data_root() -> PathBuf {
    crate::android::default_data_root()
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

pub fn vpath_to_rel(vpath: &str) -> String {
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

// 解密脚本(decrypt_arc.js)曾为每个文件重复追加一次扩展名,
// 导致磁盘上文件名为双扩展名(startup.rsb.rsb / _VERSION.txt)。
// 读取时按 exact -> name.ext.ext -> name.txt 依次尝试。
pub fn rel_candidates(vpath: &str) -> Vec<String> {
    let base = vpath_to_rel(vpath);
    let mut out = vec![base.clone()];
    if let Some(ext) = Path::new(&base).extension().and_then(|e| e.to_str()) {
        out.push(format!("{base}.{ext}"));
    }
    out.push(format!("{base}.txt"));
    out
}

// 解析顺序: 磁盘(可写覆盖, 存档优先) -> APK assets(只读)
// 注意: Documents 覆盖层在重装后可能残留旧 uid 拥有的文件(不可读),
// 因此磁盘候选必须是「确实可读的文件」, 否则继续回退到 APK。
pub fn resolve_src(vpath: &str) -> Option<Src> {
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
    }
}
