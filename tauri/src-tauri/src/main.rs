// main.rs - 桌面入口(移动端走 lib.rs 的 mobile_entry_point)
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    umiguri_lib::run()
}
