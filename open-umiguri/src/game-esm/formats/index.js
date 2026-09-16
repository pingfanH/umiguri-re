// 资源格式模块(统一入口): 归档解析 + 各加密类型 + 字符串表 + DDS + AES + 加载 API。
//
// 一个模块收齐所有「加密/打包格式」:
//   - .una / .arc     归档: 头部/表解析、位置 XOR 表、Na 流密码、gzip、打包
//   - RVST            字符串表(stringTable.rvs)
//   - DDS             头部解析 + DXT1/3/5 软解
//   - AES-256-CBC     main.js.enc
//   - 资源加载 API    createResourceLoader(io) / openArchive(...)
//
// 加密类型(P2)约定: .una = 2 ; data.arc(角色/语音) = 1 ; 旧版 = 0。
import { MAGIC, SEED_T, SEED_E, SEED_N, SEED_R, HEADER, P2, VA_TABLE, WA_TABLE, AES_KEY, AES_IV } from './constants.js';
import { rotr, xorTable, na, naInv } from './cipher.js';
import { gunzip, gzip } from './gzip.js';
import { decryptHeader, readFileData, unpack, buildArchive, stripGuessedExt, guessExt } from './archive.js';
import { parseStringTable, buildStringTable, stringTableGet } from './stringTable.js';
import { parseDdsHeader, decodeDxt, decodeDds } from './dds.js';
import { aesEncrypt, aesDecrypt } from './aes.js';

// ---- 归档/加密 ----
export { MAGIC, SEED_T, SEED_E, SEED_N, SEED_R, HEADER, P2, VA_TABLE, WA_TABLE, AES_KEY, AES_IV };
export { rotr, xorTable, na, naInv };
export { gunzip, gzip };
export { decryptHeader, readFileData, unpack, buildArchive, stripGuessedExt, guessExt };
// ---- 字符串表 ----
export { parseStringTable, buildStringTable, stringTableGet };
// ---- DDS ----
export { parseDdsHeader, decodeDxt, decodeDds };
// ---- AES ----
export { aesEncrypt, aesDecrypt };

// 打开一个归档(整文件读入 -> 解包), 返回带查询方法的对象。
// io: { size(path) -> Promise<number>, readRange(path, offset, size) -> Promise<Uint8Array> }
export async function openArchive(io, path, p2 = P2.UNA) {
  const len = await io.size(path);
  if (!len) throw new Error('无法获取大小: ' + path);
  const arc = await io.readRange(path, 0, len);
  const { m2, files } = await unpack(arc, p2);
  const map = new Map(files.map((f) => [f.name, f.data]));
  return {
    path,
    m2,
    files,
    names: files.map((f) => f.name),
    has: (name) => map.has(name),
    read: (name) => map.get(name) ?? null,
  };
}

// 统一资源加载器: 组装归档/字符串表/DDS/AES 的读取。
export function createResourceLoader(io) {
  const cache = new Map();
  const readAll = async (path) => {
    if (cache.has(path)) return cache.get(path);
    const len = await io.size(path);
    const data = await io.readRange(path, 0, len);
    cache.set(path, data);
    return data;
  };
  return {
    io,
    readFile: readAll,
    openArchive: (path, p2 = P2.UNA) => openArchive(io, path, p2),
    readArchiveFile: async (archivePath, name, p2 = P2.UNA) => {
      const ar = await openArchive(io, archivePath, p2);
      return ar.read(name);
    },
    readStringTable: async (path) => parseStringTable(await readAll(path)),
    readDds: async (path) => decodeDds(await readAll(path)),
    decryptMain: async (path) => aesDecrypt(await readAll(path)),
    clearCache: () => cache.clear(),
  };
}

export default {
  MAGIC, P2, HEADER,
  rotr, xorTable, na, naInv, gunzip, gzip,
  decryptHeader, readFileData, unpack, buildArchive, stripGuessedExt, guessExt,
  parseStringTable, buildStringTable, stringTableGet,
  parseDdsHeader, decodeDxt, decodeDds,
  aesEncrypt, aesDecrypt,
  openArchive, createResourceLoader,
};
