import struct, sys, os, re, json
import importlib.util
spec = importlib.util.spec_from_file_location('st', os.path.join(os.path.dirname(__file__), 'scan_text.py'))
st = importlib.util.module_from_spec(spec); spec.loader.exec_module(st)

from PIL import Image

TEXT = re.compile(r'text|msg|label|caption|desc|hint|str', re.I)

def regions(rsb, atlas):
    at = st.walk(rsb)
    if atlas not in at:
        return []
    ed, regs = at[atlas]
    return [(r[0], r[1], r[2], r[3], r[4]) for r in regs if TEXT.search(r[0])]

if __name__ == '__main__':
    rsb, atlas, srcdir, outdir = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
    dds = os.path.join(srcdir, 'textures', atlas + '.dds.dds')
    os.makedirs(outdir, exist_ok=True)
    for f in os.listdir(outdir):
        os.remove(os.path.join(outdir, f))
    if not os.path.exists(dds):
        print('NO_DDS', dds); sys.exit(0)
    im = Image.open(dds).convert('RGBA')
    meta = {}
    n = 0
    for name, x, y, w, h in regions(rsb, atlas):
        if w <= 0 or h <= 0:
            continue
        crop = im.crop((x, y, x + w, y + h))
        bg = Image.new('RGB', crop.size, (0, 0, 0))
        bg.paste(crop, (0, 0), crop)
        sc = max(1, min(4, 900 // max(w, h)))
        if sc > 1:
            bg = bg.resize((crop.width * sc, crop.height * sc), Image.LANCZOS)
        safe = re.sub(r'[^A-Za-z0-9_.-]', '_', name)
        fn = f'{n:03d}__{safe}.png'
        bg.save(os.path.join(outdir, fn))
        meta[fn] = {'name': name, 'box': [x, y, w, h]}
        n += 1
    json.dump(meta, open(os.path.join(outdir, '_meta.json'), 'w'), ensure_ascii=False, indent=1)
    print('extracted', n, '->', outdir)
