// 文件系统 Tauri command(替代 Electron 的 ipcMain)。
use base64::Engine;
use serde::{Deserialize, Serialize};

use crate::paths::{data_root, disk_roots, read_all, resolve_src, vpath_to_rel, write_path, Src};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct FileEntry {
    full_path: String,
    is_directory: bool,
    is_file: bool,
    name: String,
    size: u64,
}

#[derive(Serialize)]
pub struct FsListResult {
    status: i32,
    data: Vec<FileEntry>,
}

#[derive(Serialize)]
pub struct FsSizeResult {
    status: i32,
    data: Option<u64>,
}

// 列目录(合并: 磁盘可写层 + 只读资源 + APK 内置资产; 游戏只使用 name/isDirectory)
#[tauri::command]
pub fn fs_list(path: String) -> FsListResult {
    use std::collections::HashSet;
    let dir_rel = vpath_to_rel(&path);
    let mut data: Vec<FileEntry> = Vec::new();
    let mut seen: HashSet<String> = HashSet::new();
    let mut any_dir = false;
    for root in disk_roots() {
        let disk = root.join(&dir_rel);
        if let Ok(entries) = std::fs::read_dir(&disk) {
            any_dir = true;
            for e in entries.flatten() {
                let name = e.file_name().to_string_lossy().to_string();
                if !seen.insert(name.clone()) {
                    continue;
                }
                let is_dir = e.file_type().map(|t| t.is_dir()).unwrap_or(false);
                let is_file = e.file_type().map(|t| t.is_file()).unwrap_or(false);
                let size = if is_file {
                    e.metadata().map(|m| m.len()).unwrap_or(0)
                } else {
                    0
                };
                data.push(FileEntry {
                    full_path: format!("/{dir_rel}/{name}"),
                    is_directory: is_dir,
                    is_file,
                    name,
                    size,
                });
            }
        }
    }
    let apk_entries = crate::paths::apk_list(&dir_rel);
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
        let is_file = crate::paths::apk_size(&child_rel).is_some();
        let size = if is_file {
            crate::paths::apk_size(&child_rel).unwrap_or(0)
        } else {
            0
        };
        data.push(FileEntry {
            full_path: format!("/{child_rel}"),
            is_directory: !is_file,
            is_file,
            name: name.clone(),
            size,
        });
    }
    let exists = any_dir || !apk_entries.is_empty();
    FsListResult {
        status: if exists { 0 } else { -1 },
        data,
    }
}

// 读整个文件(base64 编码,避免 Vec<u8> JSON 数组序列化开销)
#[tauri::command]
pub fn fs_file(path: String) -> Result<String, String> {
    let data = read_all(&path).ok_or_else(|| format!("not found: {path}"))?;
    Ok(base64::engine::general_purpose::STANDARD.encode(&data))
}

// 文件大小
#[tauri::command]
pub fn fs_size(path: String) -> FsSizeResult {
    match resolve_src(&path) {
        Some(Src::Disk(p)) => match std::fs::metadata(&p) {
            Ok(m) => FsSizeResult {
                status: 0,
                data: Some(m.len()),
            },
            Err(_) => FsSizeResult {
                status: -1,
                data: None,
            },
        },
        Some(Src::Apk(rel)) => match crate::paths::apk_size(&rel) {
            Some(n) => FsSizeResult {
                status: 0,
                data: Some(n),
            },
            None => FsSizeResult {
                status: -1,
                data: None,
            },
        },
        None => FsSizeResult {
            status: -1,
            data: None,
        },
    }
}

// 读文件 offset/size(归档解密用, base64 编码)
#[tauri::command]
pub fn fs_read(path: String, offset: u64, size: usize) -> Result<String, String> {
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
            crate::paths::apk_read_range(&rel, offset, size).ok_or_else(|| format!("apk read failed: {rel}"))?
        }
        None => return Err(format!("not found: {path}")),
    };
    Ok(base64::engine::general_purpose::STANDARD.encode(&buf))
}

// 写整个文件(data 为 base64 编码,存档/config 持久化用; 始终写磁盘)
#[tauri::command]
pub fn fs_write(path: String, data: String) -> Result<(), String> {
    let real = write_path(&path);
    let bytes = base64::engine::general_purpose::STANDARD
        .decode(&data)
        .map_err(|e| e.to_string())?;
    if let Some(parent) = real.parent() {
        std::fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    std::fs::write(&real, bytes).map_err(|e| e.to_string())
}

// 临时诊断: 探测虚拟路径在磁盘侧的真实状态(read_dir 的 errno 等)
#[tauri::command]
pub fn debug_probe(path: String) -> String {
    use std::os::unix::fs::MetadataExt;
    let rel = vpath_to_rel(&path);
    let root = data_root();
    let disk = root.join(&rel);
    let mut out = format!(
        "root={} | rel={} | disk={}",
        root.display(),
        rel,
        disk.display()
    );
    match std::fs::metadata(&disk) {
        Ok(m) => out.push_str(&format!(
            " | meta: dir={} file={} mode={:o} uid={} gid={}",
            m.is_dir(),
            m.is_file(),
            m.mode() & 0o7777,
            m.uid(),
            m.gid()
        )),
        Err(e) => out.push_str(&format!(" | meta ERR: {e}")),
    }
    match std::fs::read_dir(&disk) {
        Ok(it) => {
            let v: Vec<String> = it
                .flatten()
                .map(|e| e.file_name().to_string_lossy().to_string())
                .collect();
            out.push_str(&format!(
                " | read_dir ok n={} sample={:?}",
                v.len(),
                v.iter().take(6).collect::<Vec<_>>()
            ));
            if let Some(name) = v.first() {
                match std::fs::read(disk.join(name)) {
                    Ok(b) => out.push_str(&format!(" | first read ok {}B", b.len())),
                    Err(e) => out.push_str(&format!(" | first read ERR: {e}")),
                }
            }
        }
        Err(e) => out.push_str(&format!(" | read_dir ERR: {e}")),
    }
    out
}
