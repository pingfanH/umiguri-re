// 握手数据与诊断 command。

// 握手(简化,游戏前端需要)
#[tauri::command]
pub fn handshake() -> serde_json::Value {
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
pub fn diag(msg: String) {
    eprintln!("[DIAG] {}", msg);
}
