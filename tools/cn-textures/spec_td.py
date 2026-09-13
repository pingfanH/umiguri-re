import json

TITLE = {
 'AJudgeDetails':'AIR判定详细','AirVol':'AIR音量','AutoPlay':'自动游玩','ExTapVol':'EX TAP音量',
 'FieldColor':'场地颜色','FieldInfo':'场地信息','FieldWall':'场地墙','FlickVol':'FLICK音量',
 'GuideLines':'引导线','GuideVol':'引导音量','JJudgeDetails':'JUSTICE判定详细','JTimingSeCond':'判定时移(秒)',
 'JcJudgeDetails':'JUSTICE CRITICAL判定详细','JudgePos':'判定位置','JusticeVol':'JUSTICE音量','Mirror':'镜像',
 'PlayerLv':'玩家等级','PlayerRating':'玩家Rating','SkillVol':'技能音量','SlideVol':'滑动音量',
 'Speed':'速度','TapSe':'按键音','TapVol':'TAP音量','TimingA':'判定时机A',
 'TimingAir':'AIR判定时机','TimingB':'判定时机B','TrackSkip':'曲目跳过'}

DESC = {
 'AJudgeDetails':'以 ATTACK 判定击中音符时\n显示判定偏移量。',
 'AirVol':'调整 AIR 与 AIR-ACTION 音效的音量。',
 'AutoPlay':'开启后所有谱面自动 AJC。',
 'ExTapVol':'调整 EX TAP 音效的音量。',
 'FieldColor':'调整场地背景的不透明度。',
 'FieldInfo':'调整场地内显示的信息。',
 'FieldWall':'调整遮挡后方音符的场地墙位置。\n0 (后) - 16 (前)',
 'FlickVol':'调整 FLICK 音效的音量。',
 'GuideLines':'调整引导线的显示数量。',
 'GuideVol':'调整引导音的音量。',
 'JJudgeDetails':'以 JUSTICE 判定击中音符时\n显示判定偏移量。',
 'JTimingSeCond':'调整判定音效的播放条件。\n可选 SKILL SE / 低于 MISS /\n低于 ATTACK / 低于 JUSTICE。',
 'JcJudgeDetails':'以 JUSTICE CRITICAL 判定击中音符时\n显示判定偏移量。',
 'JudgePos':'调整判定结果的显示位置。',
 'JusticeVol':'调整所有音符音效的音量。',
 'Mirror':'左右镜像翻转谱面。',
 'PlayerLv':'开启后显示玩家等级。',
 'PlayerRating':'开启后显示 Rating。',
 'SkillVol':'调整技能发动或减少 LIFE 时\n播放的音效音量。',
 'SlideVol':'调整 SLIDE 与 HOLD 音效的音量。',
 'Speed':'调整音符下落速度。\n1 - 20 (SONIC)',
 'TapSe':'调整 TAP 音效。',
 'TapVol':'调整 TAP 音效的音量。',
 'TimingA':'调整谱面相对乐曲的偏移。\nFAST 多时：-    LATE 多时：+',
 'TimingAir':'调整 AIR 判定的偏移。\nFAST 多时：-    LATE 多时：+',
 'TimingB':'调整判定的偏移。\nFAST 多时：-    LATE 多时：+',
 'TrackSkip':'当无法达成此条件时停止游玩。'}

TP = {'AJudgeDetails':(730,410),'AirVol':(1094,410),'AutoPlay':(1458,410),'ExTapVol':(1822,410),
'FieldColor':(1094,764),'FieldInfo':(436,596),'FieldWall':(436,680),'FlickVol':(436,764),
'GuideLines':(436,848),'GuideVol':(436,932),'JJudgeDetails':(436,1016),'JTimingSeCond':(436,1100),
'JcJudgeDetails':(436,1184),'JudgePos':(436,1268),'JusticeVol':(436,1352),'Mirror':(436,1436),
'PlayerLv':(436,1520),'PlayerRating':(436,1604),'SkillVol':(730,1688),'SlideVol':(730,1772),
'Speed':(730,1856),'TapSe':(730,1940),'TapVol':(1094,494),'TimingA':(1458,494),
'TimingAir':(1822,494),'TimingB':(1094,578),'TrackSkip':(1458,578)}

DP = {'AJudgeDetails':(1458,662),'AirVol':(1094,662),'AutoPlay':(1822,578),'ExTapVol':(436,494),
'FieldColor':(1822,680),'FieldInfo':(2,1734),'FieldWall':(2,1836),'FlickVol':(2,1938),
'GuideLines':(366,1734),'GuideVol':(366,1836),'JJudgeDetails':(366,1938),'JTimingSeCond':(730,2),
'JcJudgeDetails':(1094,2),'JudgePos':(1458,2),'JusticeVol':(1822,2),'Mirror':(730,104),
'PlayerLv':(1094,104),'PlayerRating':(1458,104),'SkillVol':(1822,104),'SlideVol':(730,206),
'Speed':(1094,206),'TapSe':(1458,206),'TapVol':(1822,206),'TimingA':(730,308),
'TimingAir':(1094,308),'TimingB':(1458,308),'TrackSkip':(1822,308)}

spec = []
for k, (x, y) in TP.items():
    spec.append({'box': [x, y, 360, 80], 'text': TITLE[k], 'h': 30, 'style': 'white'})
for k, (x, y) in DP.items():
    spec.append({'box': [x, y, 360, 98], 'text': DESC[k], 'h': 18, 'style': 'white'})

open('/tmp/spec_td.json', 'w').write(json.dumps(spec, ensure_ascii=False))
print('titles', len(TP), 'descs', len(DP), 'total', len(spec))
