// NoSafeAreaInsets.mm - 修复 WKWebView 被安全区内缩导致的整体偏移(iOS)。
//
// 现象: 横屏时 WKWebView 尺寸=安全区尺寸(如 750x381, 全屏应为 874x402),
// 游戏画面整体左移/上移, 虚拟键盘也跟着偏。
// 处理: 解除 tao/wry 给 WKWebView 施加的约束, 让它填满 superview,
// 并关闭 contentInsetAdjustmentBehavior; 同时把原生真实度量注入页面浮层,
// 便于在画面上确认(见 [umg][layout] 的 native 字段)。
#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>

static void UMGInjectMetrics(WKWebView *wv) {
    if (!wv) return;
    UIView *sup = wv.superview;
    CGRect f = wv.frame;
    CGRect sb = sup ? sup.bounds : CGRectZero;
    UIEdgeInsets sa = wv.safeAreaInsets;
    NSString *js = [NSString stringWithFormat:
        @"window.__umgNative={frame:[%g,%g,%g,%g],sup:[%g,%g,%g,%g],safe:[%g,%g,%g,%g],inset:%g};",
        f.origin.x, f.origin.y, f.size.width, f.size.height,
        sb.origin.x, sb.origin.y, sb.size.width, sb.size.height,
        sa.top, sa.left, sa.bottom, sa.right,
        wv.scrollView.contentInsetAdjustmentBehavior];
    [wv evaluateJavaScript:js completionHandler:nil];
}

static void UMGApplyFix(WKWebView *wv) {
    if (!wv) return;
    UIView *sup = wv.superview;

    // 1) 去掉约束(若有) —— Auto Layout 会在下次 layout 覆盖 frame
    if (sup) {
        for (NSLayoutConstraint *c in [sup.constraints copy]) {
            if (c.firstItem == wv || c.secondItem == wv) c.active = NO;
        }
    }
    for (NSLayoutConstraint *c in [wv.constraints copy]) c.active = NO;
    wv.translatesAutoresizingMaskIntoConstraints = YES;

    // 2) 关闭安全区内缩, 填满父视图
    wv.scrollView.contentInsetAdjustmentBehavior = UIScrollViewContentInsetAdjustmentNever;
    wv.scrollView.contentInset = UIEdgeInsetsZero;
    wv.scrollView.scrollIndicatorInsets = UIEdgeInsetsZero;
    if (sup) {
        wv.frame = sup.bounds;
        wv.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    }
    UMGInjectMetrics(wv);
}

static void UMGFixAll(void) {
    UIApplication *app = UIApplication.sharedApplication;
    NSMutableArray<UIView *> *stack = [NSMutableArray array];
    for (UIScene *scene in app.connectedScenes) {
        if (![scene isKindOfClass:[UIWindowScene class]]) continue;
        for (UIWindow *w in ((UIWindowScene *)scene).windows) [stack addObject:w];
    }
    if (stack.count == 0) {
        for (UIWindow *w in app.windows) [stack addObject:w];
    }
    while (stack.count > 0) {
        UIView *v = stack.lastObject;
        [stack removeLastObject];
        if ([v isKindOfClass:[WKWebView class]]) UMGApplyFix((WKWebView *)v);
        for (UIView *s in v.subviews) [stack addObject:s];
    }
}

static void UMGScheduleFix(void) {
    static const int64_t delaysMs[] = {200, 600, 1200, 2500, 4000};
    for (unsigned i = 0; i < sizeof(delaysMs) / sizeof(delaysMs[0]); i++) {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(delaysMs[i] * NSEC_PER_MSEC)),
                       dispatch_get_main_queue(), ^{ UMGFixAll(); });
    }
}

__attribute__((constructor)) static void UMGInstallInsetsFix(void) {
    NSNotificationCenter *nc = [NSNotificationCenter defaultCenter];
    NSArray *names = @[
        UIApplicationDidBecomeActiveNotification,
        UIApplicationDidFinishLaunchingNotification,
        UIApplicationDidChangeStatusBarOrientationNotification,
        UIDeviceOrientationDidChangeNotification,
        UIWindowDidBecomeKeyNotification,
    ];
    for (NSString *name in names) {
        [nc addObserverForName:name
                        object:nil
                         queue:[NSOperationQueue mainQueue]
                    usingBlock:^(NSNotification *n) { UMGScheduleFix(); }];
    }
}
