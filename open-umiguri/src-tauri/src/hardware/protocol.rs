//! 手台串口协议(移植自 chu2board/src/protocol.rs, 与固件 `ControlPanel.html` 一致)。
//!
//! 命令 → 响应式: 每帧先 drain 清残留, 再发命令读固定长度响应, 保证帧对齐。
#![allow(dead_code)]

/// 支持的 API 版本(固件不匹配会拒绝通信)
pub const API_LEVEL: u8 = 0x11;

// 模式
pub const MODE_NORMAL: u8 = 0;
pub const MODE_4K: u8 = 1;
pub const MODE_6K: u8 = 2;

// 命令
pub const CMD_HANDSHAKE: u8 = 0xB0; // 握手, 手台回 0xB0
pub const CMD_API_LEVEL: u8 = 0xAF; // 查询 API 版本, 回 1 字节
pub const CMD_READ_INPUT: u8 = 0xB1; // 读输入, 回 33 字节
pub const CMD_SET_LEDS: u8 = 0xB2; // 设置灯光(后续 96 字节 = 32 格 RGB)

pub const TOUCH_CHANNELS: usize = 32;
pub const AIR_SENSORS: usize = 6;
/// 0xB1 的响应长度: 32 触摸 + 1 Air(低 6 位)
pub const INPUT_RESPONSE_LEN: usize = 33;

/// 一帧输入状态
#[derive(Debug, Clone, Copy, Default)]
pub struct InputState {
    /// 32 个触摸通道, >0 表示按下
    pub touch: [u8; TOUCH_CHANNELS],
    /// 低 6 位对应 6 个 Air 传感器
    pub air: u8,
}

impl InputState {
    pub fn parse(buf: &[u8]) -> Option<Self> {
        if buf.len() < INPUT_RESPONSE_LEN {
            return None;
        }
        let mut state = InputState::default();
        state.touch.copy_from_slice(&buf[..TOUCH_CHANNELS]);
        state.air = buf[TOUCH_CHANNELS];
        Some(state)
    }

    pub fn touch_pressed(&self, i: usize) -> bool {
        self.touch[i] > 0
    }

    pub fn air_pressed(&self, i: usize) -> bool {
        (self.air >> i) & 1 != 0
    }
}
