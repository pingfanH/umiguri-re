import sys, os, json, importlib.util
from PIL import Image
HERE = '/Users/pingfanh/project/umiguri-re/tools/cn-textures'
spec = importlib.util.spec_from_file_location('st', os.path.join(HERE, 'scan_text.py'))
st = importlib.util.module_from_spec(spec); spec.loader.exec_module(st)
spec2 = importlib.util.spec_from_file_location('mc', os.path.join(HERE, 'make_cn.py'))
mc = importlib.util.module_from_spec(spec2); spec2.loader.exec_module(mc)

ROOT = '/Users/pingfanh/project/umiguri-re'
HI = f'{ROOT}/assets/core/una/hiiragi.una'
CN = f'{ROOT}/assets/core/una/zh-CN.una'

def detect_style(im, box):
    x, y, w, h = box
    px = im.load()
    black = white = colored0 = 0
    for yy in range(y, y + h, 2):
        for xx in range(x, x + w, 2):
            r, g, b, a = px[xx, yy]
            if a > 128:
                if r < 30 and g < 30 and b < 30: black += 1
                elif r > 200 and g > 200 and b > 200: white += 1
                else: colored0 += 1
    if white > 0 and black > 20: return 'outline'
    if white > 0 and black <= 20: return 'white'
    if white == 0 and black > 0 and colored0 == 0: return 'alpha'
    return 'white'

def text_h(im, box):
    x, y, w, h = box
    px = im.load()
    miny, maxy = h, -1
    for yy in range(y, y + h):
        for xx in range(x, x + w):
            if px[xx, yy][3] > 128:
                miny = min(miny, yy - y); maxy = max(maxy, yy - y)
    return (maxy - miny + 1) if maxy >= 0 else h

def process(rsb, atlas, table, h=None):
    at = st.walk(f'{HI}/ui/{rsb}')
    if atlas not in at:
        print('  no atlas', atlas); return
    ed, regs = at[atlas]
    boxes = {r[0]: r for r in regs}
    src = f'{HI}/textures/{atlas}.dds.dds'
    im = Image.open(src).convert('RGBA')
    style = None
    for name in table:
        if name in boxes:
            style = detect_style(im, boxes[name][1:5]); break
    style = style or 'white'
    n = 0
    for name, text in table.items():
        if name not in boxes:
            print('  MISS', name); continue
        r = boxes[name]
        box = (r[1], r[2], r[3], r[4])
        lines = text.count('\n') + 1
        th = h if h else max(10, text_h(im, box) // lines - (4 if style == 'outline' else 2))
        mc.replace(im, box, text, th, style)
        n += 1
    tmp = f'/tmp/{atlas}.cn.dds'
    im.save(tmp)
    print(f'  {atlas}: style={style} rendered {n}')

if __name__ == '__main__':
    data = json.load(open(sys.argv[1]))
    for item in data:
        print('##', item['atlas'])
        process(item['rsb'], item['atlas'], item['table'], item.get('h'))
