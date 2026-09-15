// umg://(或 http://umg.localhost)自定义协议: URI 解析与 MIME 推断。

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

pub fn parse_uri(uri: &str) -> String {
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
    if path.is_empty() {
        "/".to_string()
    } else {
        format!("/{}", path)
    }
}

// 根据扩展名推断 MIME 类型(图片/音频/3D 模型需正确 content-type 才能被 WebView 渲染)
pub fn mime_from_path(path: &str) -> &'static str {
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
