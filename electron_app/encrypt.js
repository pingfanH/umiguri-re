// encrypt.js - 加密游戏前端 main.js(保护源码)
// 用法: node encrypt.js <输入文件> <输出文件> [密钥]
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// 密钥和 IV(硬编码,也可自定义)
const KEY = 'umiguri-2025-inonote-16bytes-key'; // 32 字节
const IV = 'umiguri-iv-16byt'; // 16 字节

function encrypt(inputPath, outputPath) {
  const data = fs.readFileSync(inputPath);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(KEY), Buffer.from(IV));
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  fs.writeFileSync(outputPath, encrypted);
  console.log('加密完成:', inputPath, '->', outputPath);
  console.log('  明文大小:', data.length, '字节');
  console.log('  密文大小:', encrypted.length, '字节');
}

function decrypt(inputPath, outputPath) {
  const data = fs.readFileSync(inputPath);
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(KEY), Buffer.from(IV));
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
  fs.writeFileSync(outputPath, decrypted);
  console.log('解密完成:', inputPath, '->', outputPath);
}

// 命令行
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('用法:');
  console.log('  加密: node encrypt.js <输入> <输出>');
  console.log('  解密: node encrypt.js --decrypt <密文> <输出>');
  process.exit(1);
}

if (args[0] === '--decrypt') {
  decrypt(args[1], args[2]);
} else {
  encrypt(args[0], args[1]);
}

// 导出供其他脚本使用
module.exports = { KEY, IV, encrypt, decrypt };
