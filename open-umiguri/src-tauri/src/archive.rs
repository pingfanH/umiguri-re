// 归档合成: 把「解包目录」按需还原成 .una/.arc 归档字节(仅内存, 不落盘)。
//
// 用途: dev 直接读 assets/(解密解包态), 角色/语音/谱面这类「游戏按归档读」的资源
// 由本模块在读取时合成归档字节; 打包(release/Android)仍走 build/pack-assets.mjs 预打包。
//
// 与 tools/umg.cjs / src/game-esm/formats/archive.js 的 buildArchive 逐字节一致:
//   头部: byte[4] 位0=M2(文件体 gzip), 位1=R2(有表头, 必须=1)
//         u32le@5 = MAGIC ^ (4 - tableOffset)
//   表项: u32le(off)^t, u32le(off+4)^e, u8(off+8)^(255&n), name[i]^(255&r)
//   文件体: 数据 -> [P2=2 补 0 字节] -> [M2 gzip(前补 0 字节)] -> Na 逆 -> XOR 表
use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, OnceLock};
use std::time::SystemTime;

const MAGIC: u32 = 281266680; // 0x10C3C9F8
const SEED_T: u32 = 3125038119;
const SEED_E: u32 = 452525368;
const SEED_N: u32 = 3518972124;
const SEED_R: u32 = 1813668011;
const HEADER: usize = 5; // 表项 fileOffset 与真实数据起点相差 5

// P2=0 用 Va 表, P2=1/2 用 Wa 表(索引 = (absPos & 31) << 1)
#[rustfmt::skip]
const VA_TABLE: [u8; 64] = [
    168, 220, 89, 53, 219, 151, 160, 26, 53, 145, 237, 161, 148, 35, 123, 1, 157, 54, 121, 110,
    229, 160, 93, 18, 129, 35, 179, 28, 127, 161, 220, 148, 112, 95, 35, 237, 192, 127, 26, 71,
    50, 224, 1, 60, 41, 28, 247, 220, 71, 208, 54, 75, 75, 179, 151, 193, 236, 1, 95, 121, 18,
    121, 245, 95,
];
#[rustfmt::skip]
const WA_TABLE: [u8; 64] = [
    252, 113, 113, 161, 156, 129, 155, 251, 255, 156, 249, 43, 162, 156, 245, 100, 242, 193, 193,
    117, 75, 117, 10, 129, 214, 113, 144, 179, 43, 100, 144, 100, 203, 88, 251, 161, 210, 245, 71,
    144, 100, 249, 247, 255, 124, 245, 53, 10, 14, 155, 113, 113, 152, 255, 245, 179, 148, 225,
    178, 251, 179, 71, 154, 242,
];

fn rotr(state: u32, shift: u32) -> u32 {
    (state >> shift) | (state << (32 - shift))
}

// 位置相关 XOR 表(加密方向; base = 归档内绝对位置 - HEADER)
fn xor_table(buf: &mut [u8], base: u64, p2: u8) {
    let table = if p2 == 0 { &VA_TABLE } else { &WA_TABLE };
    for (i, b) in buf.iter_mut().enumerate() {
        let abs = base + i as u64;
        *b ^= table[((abs & 31) << 1) as usize];
    }
}

fn k1_at(t: usize, v: u8) -> u8 {
    if t % 5 == 0 {
        105
    } else if t % 19 == 0 {
        209
    } else if t % 83 == 0 {
        72
    } else if t % 97 == 0 {
        2
    } else {
        v
    }
}

// Na 逆向(加密): plain[t] = cipher[t] ^ K1(t, v[t]) ^ ((117 & plain[t-1]) | (72 & cipher[t-1]))
// v 序列: v[0]=250; v[t+1] = v[t] - (t % 3), 小于 0 时回绕为 255。
fn na_inv(buf: &mut [u8]) {
    let mut p_prev: u8 = 0;
    let mut c_prev: u8 = 0;
    let mut v: i32 = 250;
    for (t, b) in buf.iter_mut().enumerate() {
        if t > 0 {
            v -= ((t - 1) % 3) as i32;
            if v < 0 {
                v = 255;
            }
        }
        let c = *b;
        let p = c ^ k1_at(t, v as u8) ^ ((117 & p_prev) | (72 & c_prev));
        *b = p;
        p_prev = p;
        c_prev = c;
    }
}

// gzip(stored 块, 不压缩)。合成归档默认 m2=false, 此函数仅用于需要 gzip 的调用方。
#[allow(dead_code)]
fn gzip_stored(data: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 32);
    out.extend_from_slice(&[0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff]);
    if data.is_empty() {
        out.extend_from_slice(&[0x01, 0x00, 0x00, 0xff, 0xff]);
    } else {
        let chunks: Vec<&[u8]> = data.chunks(65535).collect();
        let n = chunks.len();
        for (i, c) in chunks.iter().enumerate() {
            out.push(if i + 1 == n { 1 } else { 0 });
            let len = c.len() as u16;
            out.extend_from_slice(&len.to_le_bytes());
            out.extend_from_slice(&(!len).to_le_bytes());
            out.extend_from_slice(c);
        }
    }
    out.extend_from_slice(&crc32(data).to_le_bytes());
    out.extend_from_slice(&(data.len() as u32).to_le_bytes());
    out
}

#[allow(dead_code)]
fn crc32(data: &[u8]) -> u32 {
    let mut crc: u32 = 0xffff_ffff;
    for &b in data {
        crc ^= b as u32;
        for _ in 0..8 {
            let mask = (crc & 1).wrapping_neg();
            crc = (crc >> 1) ^ (0xedb8_8320 & mask);
        }
    }
    !crc
}

// 名称按 latin1 落盘(与 JS `charCodeAt(i) & 0xff` 一致)
fn latin1(s: &str) -> Vec<u8> {
    s.chars().map(|c| (c as u32 & 0xff) as u8).collect()
}

// 解包时给每个文件追加过一次 guessExt, 打包时去掉最后一层扩展名。
fn strip_guessed_ext(name: &str) -> String {
    let base = name.rsplit('/').next().unwrap_or(name);
    match base.rfind('.') {
        None | Some(0) => name.to_string(),
        Some(_) => match name.rfind('.') {
            Some(i) => name[..i].to_string(),
            None => name.to_string(),
        },
    }
}

// 按游戏原始布局打包: 9 字节头 + 数据区 + 尾部表
pub fn build_archive(files: &[(String, Vec<u8>)], p2: u8, m2: bool) -> Vec<u8> {
    let headsize = HEADER + 4;
    let mut cursor = headsize;
    let mut entries: Vec<(String, u64, Vec<u8>)> = Vec::with_capacity(files.len());
    for (name, data) in files {
        let mut body = Vec::with_capacity(data.len() + 2);
        if p2 == 2 {
            body.push(0);
        }
        body.extend_from_slice(data);
        if m2 {
            let mut wrapped = vec![0u8];
            wrapped.extend_from_slice(&gzip_stored(&body));
            body = wrapped;
        }
        na_inv(&mut body);
        let file_offset = (cursor - HEADER) as u64;
        cursor += body.len();
        entries.push((name.clone(), file_offset, body));
    }
    let table_offset = cursor;
    let mut table_len = 0usize;
    let names: Vec<Vec<u8>> = entries.iter().map(|e| latin1(&e.0)).collect();
    for n in &names {
        table_len += 9 + n.len();
    }
    let mut out = vec![0u8; table_offset + table_len];
    out[4] = (m2 as u8) | 2;
    out[5..9].copy_from_slice(&(MAGIC ^ (4u32.wrapping_sub(table_offset as u32))).to_le_bytes());

    for (_, file_offset, body) in entries.iter() {
        let mut enc = body.clone();
        xor_table(&mut enc, *file_offset, p2);
        let at = *file_offset as usize + HEADER;
        out[at..at + enc.len()].copy_from_slice(&enc);
    }

    let mut off = table_offset;
    let mut t = SEED_T;
    let mut e2 = SEED_E;
    let mut n = SEED_N;
    let mut r = SEED_R;
    for (i, (_, file_offset, body)) in entries.iter().enumerate() {
        t = rotr(t, 2);
        e2 = rotr(e2, 3);
        n = rotr(n, 5);
        out[off..off + 4].copy_from_slice(&((*file_offset as u32) ^ t).to_le_bytes());
        out[off + 4..off + 8].copy_from_slice(&((body.len() as u32) ^ e2).to_le_bytes());
        let name = &names[i];
        out[off + 8] = (name.len() as u8) ^ (255 & n as u8);
        off += 9;
        for &nb in name {
            r = rotr(r, 3);
            out[off] = nb ^ (255 & r as u8);
            off += 1;
        }
    }
    out
}

// ---- 目录扫描与缓存 ----

#[derive(Clone, Copy, PartialEq, Eq)]
struct Sig {
    files: u64,
    max_mtime_ms: u64,
    total: u64,
}

// 收集非隐藏文件(相对路径, `/` 分隔), 返回签名(用于缓存失效判定)
fn scan(root: &Path, dir: &Path, acc: &mut Vec<(String, PathBuf)>) -> Sig {
    let mut sig = Sig {
        files: 0,
        max_mtime_ms: 0,
        total: 0,
    };
    let Ok(rd) = std::fs::read_dir(dir) else {
        return sig;
    };
    for e in rd.flatten() {
        let name = e.file_name().to_string_lossy().to_string();
        if name.starts_with('.') {
            continue; // 跳过 .DS_Store / ._* 等
        }
        let p = e.path();
        let Ok(ft) = e.file_type() else { continue };
        if ft.is_dir() {
            let sub = scan(root, &p, acc);
            sig.files += sub.files;
            sig.total += sub.total;
            sig.max_mtime_ms = sig.max_mtime_ms.max(sub.max_mtime_ms);
        } else if ft.is_file() {
            let md = e.metadata().ok();
            let len = md.as_ref().map(|m| m.len()).unwrap_or(0);
            let mt = md
                .as_ref()
                .and_then(|m| m.modified().ok())
                .and_then(|t| t.duration_since(SystemTime::UNIX_EPOCH).ok())
                .map(|d| d.as_millis() as u64)
                .unwrap_or(0);
            sig.files += 1;
            sig.total += len;
            sig.max_mtime_ms = sig.max_mtime_ms.max(mt);
            acc.push((rel_name(root, &p), p));
        }
    }
    sig
}

fn rel_name(dir: &Path, p: &Path) -> String {
    p.strip_prefix(dir)
        .map(|r| {
            r.components()
                .map(|c| c.as_os_str().to_string_lossy().to_string())
                .collect::<Vec<_>>()
                .join("/")
        })
        .unwrap_or_default()
}

// 归档目录名决定 P2: .una=2, 其余(.arc)=1
pub fn archive_p2(rel: &str) -> Option<u8> {
    if rel.ends_with(".una") {
        Some(2)
    } else if rel.ends_with(".arc") {
        Some(1)
    } else {
        None
    }
}

// 目录(归档)里是否至少有一个文件(递归)。
// 用途: 可写层的目录骨架会复刻出「空的归档镜像目录」, 不能让它遮蔽只读资源里的真归档。
pub fn dir_has_files(dir: &Path) -> bool {
    let Ok(rd) = std::fs::read_dir(dir) else {
        return false;
    };
    for e in rd.flatten() {
        if let Ok(ft) = e.file_type() {
            if ft.is_file() {
                return true;
            }
            if ft.is_dir() && dir_has_files(&e.path()) {
                return true;
            }
        }
    }
    false
}

type Cache = Mutex<HashMap<PathBuf, (Sig, Arc<Vec<u8>>)>>;
static CACHE: OnceLock<Cache> = OnceLock::new();

// 目录 -> 归档字节(m2=false; 游戏按头部标志决定是否解压, 无需压缩即可读)。
// 结果按签名缓存; 超过上限时整体清空(dev 场景, 避免长期驻留大量归档)。
pub fn dir_archive(dir: &Path, p2: u8) -> Option<Arc<Vec<u8>>> {
    let mut raw: Vec<(String, PathBuf)> = Vec::new();
    let sig = scan(dir, dir, &mut raw);
    if sig.files == 0 {
        return None;
    }
    let cache = CACHE.get_or_init(|| Mutex::new(HashMap::new()));
    if let Ok(map) = cache.lock() {
        if let Some((s, data)) = map.get(dir) {
            if *s == sig {
                return Some(data.clone());
            }
        }
    }
    // 与 JS packDir 一致: 先按相对路径排序, 再去掉解包时追加的 guessExt
    raw.sort_by(|a, b| a.0.cmp(&b.0));
    let mut files: Vec<(String, Vec<u8>)> = Vec::with_capacity(raw.len());
    for (rel, p) in &raw {
        let data = std::fs::read(p).ok()?;
        files.push((strip_guessed_ext(rel), data));
    }
    let bytes = Arc::new(build_archive(&files, p2, false));
    if let Ok(mut map) = cache.lock() {
        if map.len() >= 32 {
            map.clear();
        }
        map.insert(dir.to_path_buf(), (sig, bytes.clone()));
    }
    Some(bytes)
}

#[cfg(test)]
mod tests {
    use super::*;

    // 合成 assets/core/una/zh-CN.una 供与 JS packDir 逐字节对比(见 tools/verify-synth.sh)
    #[test]
    fn dump_synth_fixture() {
        let root = PathBuf::from(env!("CARGO_MANIFEST_DIR"))
            .parent()
            .unwrap()
            .join("assets");
        for name in ["core/una/zh-CN.una", "data/characters/UMIGURI/uni"] {
            let dir = root.join(name);
            if !dir.is_dir() {
                continue;
            }
            let p2 = archive_p2(name).unwrap_or(1);
            let Some(bytes) = dir_archive(&dir, p2) else {
                continue;
            };
            let out = std::env::temp_dir().join(format!(
                "umg_synth_{}.arc",
                name.replace('/', "_")
            ));
            std::fs::write(&out, bytes.as_slice()).unwrap();
            eprintln!("[synth] {} p2={} -> {} ({}B)", name, p2, out.display(), bytes.len());
        }
    }
}
