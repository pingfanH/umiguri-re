// NoSafeAreaInsets.mm - 修复 WKWebView 被安全区内缩导致的整体偏移(iOS)。
//
// 现象: 横屏时 WKWebView 被内缩成 (screen - 安全区) 的尺寸, 却摆在 (0,0),
// 于是游戏画面整体左移/上移, 宿主虚拟键盘也跟着偏。
// 处理: 让 WKWebView 全屏(填满 superview), 并关闭 contentInsetAdjustmentBehavior,
// 使 CSS 视口 = 物理屏幕, 游戏按其自身逻辑居中即可。
#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>

static void UMGFixWebViewInsets(void) {
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
        if ([v isKindOfClass:[WKWebView class]]) {
            WKWebView *wv = (WKWebView *)v;
            wv.scrollView.contentInsetAdjustmentBehavior = UIScrollViewContentInsetAdjustmentNever;
            wv.scrollView.contentInset = UIEdgeInsetsZero;
            wv.scrollView.scrollIndicatorInsets = UIEdgeInsetsZero;
            if (wv.superview) {
                wv.frame = wv.superview.bounds;
                wv.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
            }
        }
        for (UIView *s in v.subviews) [stack addObject:s];
    }
}

static void UMGScheduleFix(void) {
    static const int64_t delaysMs[] = {200, 600, 1200, 2500};
    for (unsigned i = 0; i < sizeof(delaysMs) / sizeof(delaysMs[0]); i++) {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(delaysMs[i] * NSEC_PER_MSEC)),
                       dispatch_get_main_queue(), ^{ UMGFixWebViewInsets(); });
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
