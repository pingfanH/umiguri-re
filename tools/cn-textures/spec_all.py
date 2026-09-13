import json, sys
sys.path.insert(0, '/tmp')
from spec_td import TITLE, DESC, TP, DP

VAL = {
 'AllJudgeDetails':((1782,782),'全部显示'),
 'BelowA':((1064,1496),'低于 ATTACK'),
 'BelowJ':((1064,1568),'低于 JUSTICE'),
 'BelowM':((1094,1640),'低于 MISS'),
 'BorderMyBest':((1094,1712),'边框 / 个人最佳'),
 'BorderS':((436,2),'边框 / S'),
 'BorderSp':((800,494),'边框 / S+'),
 'BorderSs':((436,74),'边框 / SS'),
 'BorderSsp':((800,566),'边框 / SS+'),
 'BorderSss':((436,146),'边框 / SSS'),
 'BorderSssp':((800,638),'边框 / SSS+'),
 'Bottom':((436,218),'底部'),
 'Combo':((800,710),'连击'),
 'Custom':((436,290),'自定义'),
 'Div16':((800,782),'1/16'),
 'Div2':((436,362),'1/2'),
 'Div4':((1094,848),'1/4'),
 'Div8':((800,854),'1/8'),
 'JudgeFastLate':((1094,920),'仅快 / 慢'),
 'Middle':((800,926),'中部'),
 'MyBest':((1094,992),'个人最佳'),
 'NoJudgeDetails':((800,998),'仅判定'),
 'Off':((1782,854),'关'),
 'On':((1782,926),'开'),
 'ScoreN':((1358,1023),'分数 (-)'),
 'ScoreP':((1094,1064),'分数 (+)'),
 'SkillSe':((800,1070),'技能音'),
 'Tap0':((1094,1208),'默认'),
 'Tap1':((800,1214),'拍手'),
 'Tap2':((1886,1142),'雨声'),
 'Tap3':((800,1286),'木鱼'),
 'Tap4':((800,1358),'铃'),
 'Tap5':((800,1430),'底鼓&镲'),
 'Tap6':((800,1502),'短拍手'),
 'Tap7':((800,1574),'太鼓'),
 'Tap8':((1064,1280),'洗衣机'),
 'Tap9':((1064,1352),'元气'),
 'Top':((1064,1424),'顶部'),
}
# 保持拉丁文字的区域(用 hiiragi 原样即可, 不重绘)
KEEP = {'S','Sp','Ss','Ssp','Sss','Sssp','Sonic','Sky'}

spec = []
for k, (x, y) in TP.items():
    spec.append({'box': [x, y, 360, 80], 'text': TITLE[k], 'h': 30, 'style': 'white'})
for k, (x, y) in DP.items():
    spec.append({'box': [x, y, 360, 98], 'text': DESC[k], 'h': 18, 'style': 'white'})
for k, ((x, y), t) in VAL.items():
    spec.append({'box': [x, y, 260, 68], 'text': t, 'h': 30, 'style': 'white'})

open('/tmp/spec_all.json', 'w').write(json.dumps(spec, ensure_ascii=False))
print('titles', len(TP), 'descs', len(DP), 'vals', len(VAL), 'total', len(spec))
