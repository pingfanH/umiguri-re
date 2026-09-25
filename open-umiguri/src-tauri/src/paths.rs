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
#[cfg(not(target_os = "android"))]
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
        // .una/.arc 的解包目录 == 归档: 按需合成(dev 文件夹态)。
        // 必须挑「实际有内容」的那个根: 可写层骨架会复刻出空镜像目录, 直接返回空归档
        // 会遮蔽只读资源里的真归档(表现为角色 / 语音 / 语言包读不到)。
        if let Some(p2) = crate::archive::archive_p2(&rel) {
            for root in &roots {
                let disk = root.join(&rel);
                if disk.is_dir() && crate::archive::dir_has_files(&disk) {
                    return Some(Src::Synth { dir: disk, p2 });
                }
            }
            continue; // 各根里该归档目录都为空: 试下一个候选(.ext.ext / .txt)
        }
        for root in &roots {
            let disk = root.join(&rel);
            if disk.exists() {
                return Some(Src::Disk(disk)); // 普通目录/不可读: 由上层返回错误
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

// 在可写层里复刻只读资源的目录骨架(**仅目录, 不含文件**)。
// 用途: 让用户把"额外补丁"(新增曲目/角色/技能等)直接丢进已有层级, 不必手工建目录;
// 例如原资源里 data/music/EXAMPLE/<曲目>/, 复刻后用户可直接往 data/music/EXAMPLE/ 里
// 放自己的曲目文件夹。写盘时与只读资源合并(fs_list 会合并两个根), 因此不影响原内容。
pub fn ensure_asset_dir_layout(data_root: &Path, asset_root: &Path, top: &str) -> usize {
    let base = asset_root.join(top);
    if !base.is_dir() {
        return 0;
    }
    let mut stack = vec![base];
    let mut created = 0usize;
    while let Some(dir) = stack.pop() {
        let Ok(rd) = std::fs::read_dir(&dir) else { continue };
        for e in rd.flatten() {
            let Ok(ft) = e.file_type() else { continue };
            if !ft.is_dir() {
                continue;
            }
            // 归档目录(.una/.arc)不是「放补丁」的目标, 不要复刻它的空镜像:
            // 空镜像会遮蔽只读资源里的真归档(见 resolve_src)。
            let name = e.file_name().to_string_lossy().to_string();
            if name.ends_with(".una") || name.ends_with(".arc") {
                if let Ok(rel) = e.path().strip_prefix(asset_root) {
                    let mirror = data_root.join(rel);
                    if mirror.is_dir() && !crate::archive::dir_has_files(&mirror) {
                        let _ = std::fs::remove_dir_all(&mirror); // 清掉历史遗留的空镜像
                    }
                }
                continue;
            }
            if let Ok(rel) = e.path().strip_prefix(asset_root) {
                let dst = data_root.join(rel);
                if !dst.exists() && std::fs::create_dir_all(&dst).is_ok() {
                    created += 1;
                }
            }
            stack.push(e.path());
        }
    }
    created
}

// 首次启动: 把只读资源里的 core/config/*.json 复制到可写层(文档/UMIGURI),
// 便于用户直接查看与修改配置。已存在的文件不覆盖(保留用户改动 / 游戏写入)。
// (仅 release 调用, 见 lib.rs; debug 下允许未使用。)
#[allow(dead_code)]
pub fn ensure_config_files(data_root: &Path, asset_root: &Path) -> usize {
    let rel_dir = "core/config";
    let dst_dir = data_root.join(rel_dir);
    if std::fs::create_dir_all(&dst_dir).is_err() {
        return 0;
    }
    let mut names: Vec<String> = Vec::new();
    if let Ok(rd) = std::fs::read_dir(asset_root.join(rel_dir)) {
        for e in rd.flatten() {
            let name = e.file_name().to_string_lossy().to_string();
            if name.ends_with(".json") {
                names.push(name);
            }
        }
    }
    let mut copied = 0usize;
    for name in names {
        let dst = dst_dir.join(&name);
        if dst.exists() {
            continue;
        }
        let bytes = std::fs::read(asset_root.join(rel_dir).join(&name))
            .ok()
            .or_else(|| {
                let rel = format!("{rel_dir}/{name}");
                let len = apk_size(&rel)? as usize;
                apk_read_range(&rel, 0, len)
            });
        if let Some(b) = bytes {
            if std::fs::write(&dst, b).is_ok() {
                copied += 1;
            }
        }
    }
    copied
}

#[cfg(test)]
mod tests {
    use super::*;

    // 首次启动把 config/*.json 复制到可写层, 且不覆盖已有文件。
    #[test]
    fn config_files_copied_once() {
        let base = std::env::temp_dir().join(format!("umg_cfg_test_{}", std::process::id()));
        let data = base.join("userdata");
        let assets = base.join("assets");
        let _ = std::fs::remove_dir_all(&base);
        std::fs::create_dir_all(assets.join("core/config")).unwrap();
        std::fs::write(assets.join("core/config/game.json"), b"{\"a\":1}").unwrap();
        std::fs::write(assets.join("core/config/se.json"), b"{}").unwrap();
        std::fs::write(assets.join("core/config/notes.txt"), b"x").unwrap();

        assert_eq!(ensure_config_files(&data, &assets), 2); // 只复制 .json
        assert_eq!(std::fs::read(data.join("core/config/game.json")).unwrap(), b"{\"a\":1}");
        // 用户改过之后再次启动不得覆盖
        std::fs::write(data.join("core/config/game.json"), b"{\"a\":2}").unwrap();
        assert_eq!(ensure_config_files(&data, &assets), 0);
        assert_eq!(std::fs::read(data.join("core/config/game.json")).unwrap(), b"{\"a\":2}");

        let _ = std::fs::remove_dir_all(&base);
    }

    // 可写层的空归档镜像目录不得遮蔽只读资源里的真归档(角色/语音曾在 dev 下读不到)。
    #[test]
    fn archive_prefers_root_with_content() {
        let base = std::env::temp_dir().join(format!("umg_paths_test_{}", std::process::id()));
        let data = base.join("userdata");
        let assets = base.join("assets");
        let _ = std::fs::remove_dir_all(&base);
        // 可写层: 空镜像目录
        std::fs::create_dir_all(data.join("data/x.arc")).unwrap();
        // 只读资源: 有内容的归档目录
        std::fs::create_dir_all(assets.join("data/x.arc")).unwrap();
        std::fs::write(assets.join("data/x.arc/a.bin"), b"hello").unwrap();
        // 只读资源里的普通文件
        std::fs::write(assets.join("plain.txt"), b"ok").unwrap();

        std::env::set_var("UMIGURI_DATA_DIR", &data);
        std::env::set_var("UMIGURI_ASSETS_DIR", &assets);

        match resolve_src("/data/x.arc") {
            Some(Src::Synth { dir, p2 }) => {
                assert_eq!(p2, 1);
                assert!(dir.starts_with(&assets), "应选中只读资源里的归档: {dir:?}");
            }
            other => panic!("期望 Synth(只读归档), 实际 {:?}", other.is_some()),
        }
        assert!(matches!(resolve_src("/plain.txt"), Some(Src::Disk(_))));

        std::env::remove_var("UMIGURI_DATA_DIR");
        std::env::remove_var("UMIGURI_ASSETS_DIR");
        let _ = std::fs::remove_dir_all(&base);
    }
}
