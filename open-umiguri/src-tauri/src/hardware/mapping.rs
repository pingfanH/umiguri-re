//! 手台通道 ↔ UMIGURI 档位 的映射, 以及灯光颜色顺序。
//!
//! UMIGURI 的档位(window.__umgLanes 下标 = 游戏 laneVk 序号):
//!   2*i   = 第 i 档(左起)的上排键(front)
//!   2*i+1 = 第 i 档的下排键(back)
//!   32..37 = 6 个 air
//! 手台串口的 32 个触摸通道是前后成对、**从右往左**编号(与 chu2board 一致):
//!   通道 2*(15-lane)+1 = lane(左起, 0..15) 的上排键, +2 = 下排键

// Android 无串口, 灯光帧构造链路不会被用到(仅桌面 LED 服务端调用)
#![cfg_attr(any(target_os = "android", target_os = "ios"), allow(dead_code))]

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

/// lane 与「右边相邻 lane」之间那颗**间隔灯**的通道号(1 起, 与其余映射一致)。
///
/// ⚠ 不要用 lane 自己的后通道: 物理上通道 1/2 是「最右键」和「它左边的间隔灯」,
/// 也就是某个 lane 的「后」通道其实是它**左边**那颗间隔灯 —— 直接拿来当
/// 「lane 与 lane+1 之间的灯」会整体错一位(lane0 写到最左端空灯、最后一格越界)。
/// 正确的间隔灯 = 下一个 lane 的后通道(等价于它的前通道)对应的格子。
pub fn gap_cell_of_lane(lane: usize) -> Option<usize> {
    channel_of_umiguri_index(2 * (lane + 1) + 1)
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
    /// 设备(手台固件/灯珠)把 3 个字节按 **B,R,G** 解释:
    /// 收到 [x,y,z] 显示为 (R=y, G=z, B=x)。要显示逻辑色 (r,g,b) 必须发 [b,r,g]。
    fn default() -> Self {
        LedOrder::Brg
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
    // 15 个间隔灯 → 嵌在相邻两键之间的格子(不是本档自己的后通道, 见 gap_cell_of_lane)
    for i in 0..15 {
        let b = 49 + i * 3;
        let rgb = [scale(payload[b]), scale(payload[b + 1]), scale(payload[b + 2])];
        if let Some(cell) = gap_cell_of_lane(i) {
            set(cell, rgb);
        }
    }
    Some(led)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn led_cells_are_interleaved() {
        // 键灯(16 个档位): 0 起格子应为偶数 30,28,...,0
        let keys: Vec<usize> = (0..16)
            .map(|i| channel_of_umiguri_index(2 * i).unwrap() - 1)
            .collect();
        assert_eq!(keys, vec![30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0]);
        // 间隔灯(15 个): 应为奇数 29,27,...,1, 正好嵌在相邻两键之间, 且不越界
        // gap_cell_of_lane 返回 1 起通道, 转成 0 起格子
        let gaps: Vec<usize> = (0..15).map(|i| gap_cell_of_lane(i).unwrap() - 1).collect();
        assert_eq!(gaps, vec![29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]);
        for g in &gaps {
            assert!(*g < 32);
        }
    }

    #[test]
    fn led_payload_maps_keys_and_gaps() {
        // 亮度 255; 16 个档位灯: 第 0 档纯红, 其余灭; 15 个间隔灯: 第 0 个纯绿, 其余灭
        let mut p = vec![0u8; 103];
        p[0] = 255;
        p[1] = 255;
        p[2] = 0;
        p[3] = 0;
        p[49] = 0;
        p[50] = 255;
        p[51] = 0;
        let f = build_led_frame(&p, LedOrder::default()).unwrap();
        // 键灯 lane0 = 格子 30; brg 字节序: 红 (255,0,0) -> [0,255,0]
        assert_eq!(&f[30 * 3..30 * 3 + 3], &[0, 255, 0]);
        // 间隔灯 0 = 格子 29; 绿 (0,255,0) -> [0,0,255]
        assert_eq!(&f[29 * 3..29 * 3 + 3], &[0, 0, 255]);
    }
}
