//! 手台通道 ↔ UMIGURI 档位 的映射, 以及灯光颜色顺序。
//!
//! UMIGURI 的档位(window.__umgLanes 下标 = 游戏 laneVk 序号):
//!   2*i   = 第 i 档(左起)的上排键(front)
//!   2*i+1 = 第 i 档的下排键(back)
//!   32..37 = 6 个 air
//! 手台串口的 32 个触摸通道是前后成对、**从右往左**编号(与 chu2board 一致):
//!   通道 2*(15-lane)+1 = lane(左起, 0..15) 的上排键, +2 = 下排键

// Android 无串口, 灯光帧构造链路不会被用到(仅桌面 LED 服务端调用)
#![cfg_attr(target_os = "android", allow(dead_code))]

pub const TOUCH_CHANNELS: usize = 32;
pub const AIR_SENSORS: usize = 6;

/// 手台 1 起通道号 → UMIGURI 档位下标(0..31)
pub fn umiguri_index_of_channel(channel1: usize) -> Option<usize> {
    if channel1 == 0 || channel1 > TOUCH_CHANNELS {
        return None;
    }
    if channel1 % 2 == 1 {
        // front: 通道 1 对应最右 lane(15) 的上排
        let lane = 15 - (channel1 - 1) / 2;
        Some(2 * lane)
    } else {
        let lane = 15 - (channel1 - 2) / 2;
        Some(2 * lane + 1)
    }
}

/// UMIGURI 档位下标(0..31) → 手台 1 起通道号
pub fn channel_of_umiguri_index(idx: usize) -> Option<usize> {
    if idx >= TOUCH_CHANNELS {
        return None;
    }
    let lane = idx / 2;
    if idx % 2 == 0 {
        Some(2 * (15 - lane) + 1)
    } else {
        Some(2 * (15 - lane) + 2)
    }
}

/// air 位(0..5) → UMIGURI air 下标(32..37)
pub fn umiguri_air_index(bit: usize) -> usize {
    TOUCH_CHANNELS + bit.min(AIR_SENSORS - 1)
}

/// 灯光颜色顺序(chu2board 的 led_order)
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LedOrder {
    Rgb,
    Bgr,
    Grb,
    Brg,
    Gbr,
    Rbg,
}

impl LedOrder {
    pub fn parse(s: &str) -> Self {
        match s.to_ascii_lowercase().as_str() {
            "bgr" => LedOrder::Bgr,
            "grb" => LedOrder::Grb,
            "brg" => LedOrder::Brg,
            "gbr" => LedOrder::Gbr,
            "rbg" => LedOrder::Rbg,
            _ => LedOrder::Rgb,
        }
    }

    pub fn apply(&self, rgb: [u8; 3]) -> [u8; 3] {
        let [r, g, b] = rgb;
        match self {
            LedOrder::Rgb => [r, g, b],
            LedOrder::Bgr => [b, g, r],
            LedOrder::Grb => [g, r, b],
            LedOrder::Brg => [b, r, g],
            LedOrder::Gbr => [g, b, r],
            LedOrder::Rbg => [r, b, g],
        }
    }
}

impl Default for LedOrder {
    fn default() -> Self {
        LedOrder::Rgb
    }
}

/// 把 UMIGURI SetLED 载荷(亮度 + 16 档 RGB + 15 间隔 RGB)转成手台 96 字节(32 格 RGB)。
///
/// 载荷布局(与 chu2board 的 UMIGURI LED 服务端一致):
///   [0] 亮度 0..255; [1 + i*3 .. ] 16 个档位灯(左→右);
///   [49 + i*3 ..] 15 个档间灯
pub fn build_led_frame(payload: &[u8], order: LedOrder) -> Option<[u8; 96]> {
    // 亮度(1) + 16 档(48) + 15 间隔(45) = 94 字节
    if payload.len() < 94 {
        return None;
    }
    let brightness = payload[0] as u16;
    let scale = |v: u8| ((v as u16 * brightness) / 255) as u8;

    let mut led = [0u8; 96];
    let mut set = |cell1: usize, rgb: [u8; 3]| {
        if let Some(i) = cell1.checked_sub(1) {
            if i < 32 {
                let o = order.apply(rgb);
                led[i * 3] = o[0];
                led[i * 3 + 1] = o[1];
                led[i * 3 + 2] = o[2];
            }
        }
    };

    // 16 个档位灯(左→右) → 各档上排灯的通道
    for i in 0..16 {
        let b = 1 + i * 3;
        let rgb = [scale(payload[b]), scale(payload[b + 1]), scale(payload[b + 2])];
        if let Some(cell) = channel_of_umiguri_index(2 * i) {
            set(cell, rgb);
        }
    }
    // 15 个间隔灯 → 各档下排灯的通道(第 i 个间隔取第 i 档的下排)
    for i in 0..15 {
        let b = 49 + i * 3;
        let rgb = [scale(payload[b]), scale(payload[b + 1]), scale(payload[b + 2])];
        if let Some(cell) = channel_of_umiguri_index(2 * i + 1) {
            set(cell, rgb);
        }
    }
    Some(led)
}
