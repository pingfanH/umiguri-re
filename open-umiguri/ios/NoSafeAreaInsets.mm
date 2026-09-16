// NoSafeAreaInsets.mm - 强制 WKWebView 铺满整个 window(iOS)。
//
// 背景: tao/wry 把 WKWebView 约束到安全区(横屏 750x381, 全屏应 874x402)且锚在原点,
// 导致游戏整体偏移。这里不去修补 game 的 CSS, 而是直接:
//   1) 解掉父视图/自身对 WKWebView 的约束
//   2) 清掉祖先链的 clipsToBounds 与安全区边距, 允许溢出父视图
//   3) 用 window 坐标把 WKWebView 的 frame 设为铺满 window
//   4) 关闭 contentInsetAdjustmentBehavior
// 并把结果注入页面(window.__umgNative), 便于在画面上确认。
#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>
#import <objc/runtime.h>

// ---- 强制 UIScrollView 的 contentInsetAdjustmentBehavior = Never ----
// wry/tao 会把 WKWebView 的该属性设回 automatic/scrollableAxes, 导致布局视口
// 被安全区内缩(横屏 750x381 而非 874x402)。这里 swizzle setter 强制 Never。
@interface UIScrollView (UMGNoSafeArea)
@end
@implementation UIScrollView (UMGNoSafeArea)
- (void)umg_setContentInsetAdjustmentBehavior:(UIScrollViewContentInsetAdjustmentBehavior)behavior {
    [self umg_setContentInsetAdjustmentBehavior:UIScrollViewContentInsetAdjustmentNever];
}
@end
static void UMGSwizzleInsetBehavior(void) {
    Class cls = [UIScrollView class];
    Method m1 = class_getInstanceMethod(cls, @selector(setContentInsetAdjustmentBehavior:));
    Method m2 = class_getInstanceMethod(cls, @selector(umg_setContentInsetAdjustmentBehavior:));
    if (m1 && m2) method_exchangeImplementations(m1, m2);
}

static NSUInteger UMGRunCount = 0;

static void UMGInjectJS(WKWebView *wv) {
    if (!wv) return;
    UIView *sup = wv.superview;
    CGRect f = wv.frame;
    CGRect sb = sup ? sup.bounds : CGRectZero;
    CGRect wb = wv.window ? wv.window.bounds : CGRectZero;
    UIEdgeInsets sa = wv.safeAreaInsets;
    NSString *js = [NSString stringWithFormat:
        @"window.__umgNative={ran:%lu,frame:[%g,%g,%g,%g],sup:[%g,%g,%g,%g],win:[%g,%g,%g,%g],safe:[%g,%g,%g,%g],inset:%g};",
        (unsigned long)UMGRunCount,
        f.origin.x, f.origin.y, f.size.width, f.size.height,
        sb.origin.x, sb.origin.y, sb.size.width, sb.size.height,
        wb.origin.x, wb.origin.y, wb.size.width, wb.size.height,
        sa.top, sa.left, sa.bottom, sa.right,
        wv.scrollView.contentInsetAdjustmentBehavior];
    [wv evaluateJavaScript:js completionHandler:nil];
}

static void UMGApplyFix(WKWebView *wv) {
    if (!wv) return;
    UIView *sup = wv.superview;
    UIWindow *win = wv.window;

    // 1) 解除约束
    if (sup) {
        for (NSLayoutConstraint *c in [sup.constraints copy]) {
            if (c.firstItem == wv || c.secondItem == wv) c.active = NO;
        }
    }
    for (NSLayoutConstraint *c in [wv.constraints copy]) c.active = NO;
    wv.translatesAutoresizingMaskIntoConstraints = YES;

    // 2) 祖先链允许溢出 + 取消安全区边距
    for (UIView *a = sup; a && a != win; a = a.superview) {
        a.clipsToBounds = NO;
        a.insetsLayoutMarginsFromSafeArea = NO;
        a.layoutMargins = UIEdgeInsetsZero;
        if (@available(iOS 11.0, *)) a.directionalLayoutMargins = NSDirectionalEdgeInsetsZero;
    }

    // 3) 关闭安全区内缩
    wv.scrollView.contentInsetAdjustmentBehavior = UIScrollViewContentInsetAdjustmentNever;
    wv.scrollView.contentInset = UIEdgeInsetsZero;
    wv.scrollView.scrollIndicatorInsets = UIEdgeInsetsZero;

    // 4) 铺满 window(把 window 的 bounds 转到 superview 坐标系)
    if (win && sup) {
        wv.frame = [sup convertRect:win.bounds fromView:win];
        wv.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    } else if (sup) {
        wv.frame = sup.bounds;
    }
    UMGRunCount++;
    UMGInjectJS(wv);
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
    static const int64_t delaysMs[] = {100, 300, 600, 1000, 1600, 2500, 4000, 6000};
    for (unsigned i = 0; i < sizeof(delaysMs) / sizeof(delaysMs[0]); i++) {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(delaysMs[i] * NSEC_PER_MSEC)),
                       dispatch_get_main_queue(), ^{ UMGFixAll(); });
    }
}

__attribute__((constructor)) static void UMGInstallInsetsFix(void) {
    UMGSwizzleInsetBehavior();
    NSNotificationCenter *nc = [NSNotificationCenter defaultCenter];
    NSArray *names = @[
        UIApplicationDidBecomeActiveNotification,
        UIApplicationDidFinishLaunchingNotification,
        UIApplicationDidChangeStatusBarOrientationNotification,
        UIDeviceOrientationDidChangeNotification,
        UIWindowDidBecomeKeyNotification,
        UIWindowDidBecomeVisibleNotification,
    ];
    for (NSString *name in names) {
        [nc addObserverForName:name
                        object:nil
                         queue:[NSOperationQueue mainQueue]
                    usingBlock:^(NSNotification *n) { UMGScheduleFix(); }];
    }
    UMGScheduleFix();
}
