// 资源读取统计(UMG_STATS=1 开启): 定位瓶颈 —— 传输量 / 磁盘读取 / Range 占比。
use std::sync::atomic::{AtomicU64, Ordering};
use std::time::Duration;

pub static REQUESTS: AtomicU64 = AtomicU64::new(0);
pub static BYTES: AtomicU64 = AtomicU64::new(0);
pub static READ_NS: AtomicU64 = AtomicU64::new(0);
pub static RANGE_REQS: AtomicU64 = AtomicU64::new(0);
pub static FULL_REQS: AtomicU64 = AtomicU64::new(0);
pub static UNA_REQS: AtomicU64 = AtomicU64::new(0);
pub static UNA_BYTES: AtomicU64 = AtomicU64::new(0);

pub fn enabled() -> bool {
    std::env::var_os("UMG_STATS").is_some()
}

pub fn record(vpath: &str, bytes: usize, read: Duration, is_range: bool) {
    if !enabled() {
        return;
    }
    REQUESTS.fetch_add(1, Ordering::Relaxed);
    BYTES.fetch_add(bytes as u64, Ordering::Relaxed);
    READ_NS.fetch_add(read.as_nanos() as u64, Ordering::Relaxed);
    if is_range {
        RANGE_REQS.fetch_add(1, Ordering::Relaxed);
    } else {
        FULL_REQS.fetch_add(1, Ordering::Relaxed);
    }
    if vpath.contains(".una") {
        UNA_REQS.fetch_add(1, Ordering::Relaxed);
        UNA_BYTES.fetch_add(bytes as u64, Ordering::Relaxed);
    }
}

// 每 2 秒把「窗口内」增量打到 stderr(便于和启动时序对照)
pub fn spawn_reporter() {
    if !enabled() {
        return;
    }
    std::thread::spawn(|| {
        let mut last = Snapshot::take();
        loop {
            std::thread::sleep(Duration::from_secs(2));
            let now = Snapshot::take();
            let d = now.diff(&last);
            last = now;
            eprintln!(
                "[STAT] +{} req (+{} range/+{} full) | {:.1} MB (+{:.2} MB total) | read {} ms (avg {:.2} ms) | .una {:.1} MB",
                d.reqs,
                d.range_reqs,
                d.full_reqs,
                d.bytes as f64 / 1048576.0,
                now.bytes as f64 / 1048576.0,
                d.read_ms,
                if d.reqs > 0 { d.read_ms as f64 / d.reqs as f64 } else { 0.0 },
                d.una_bytes as f64 / 1048576.0,
            );
        }
    });
}

#[derive(Clone, Copy)]
struct Snapshot {
    reqs: u64,
    bytes: u64,
    read_ms: u64,
    range_reqs: u64,
    full_reqs: u64,
    una_bytes: u64,
}

impl Snapshot {
    fn take() -> Self {
        Snapshot {
            reqs: REQUESTS.load(Ordering::Relaxed),
            bytes: BYTES.load(Ordering::Relaxed),
            read_ms: READ_NS.load(Ordering::Relaxed) / 1_000_000,
            range_reqs: RANGE_REQS.load(Ordering::Relaxed),
            full_reqs: FULL_REQS.load(Ordering::Relaxed),
            una_bytes: UNA_BYTES.load(Ordering::Relaxed),
        }
    }
    fn diff(&self, prev: &Snapshot) -> Self {
        Snapshot {
            reqs: self.reqs.saturating_sub(prev.reqs),
            bytes: self.bytes.saturating_sub(prev.bytes),
            read_ms: self.read_ms.saturating_sub(prev.read_ms),
            range_reqs: self.range_reqs.saturating_sub(prev.range_reqs),
            full_reqs: self.full_reqs.saturating_sub(prev.full_reqs),
            una_bytes: self.una_bytes.saturating_sub(prev.una_bytes),
        }
    }
}
