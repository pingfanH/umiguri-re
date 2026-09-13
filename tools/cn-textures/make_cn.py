#!/usr/bin/env python3
# 把贴图区域重渲染成中文(支持多行)
#  style: alpha(RGB=0,alpha字形) | white(纯白) | outline(白+黑描边)
from PIL import Image, ImageDraw, ImageFont

FONT = '/System/Library/Fonts/Hiragino Sans GB.ttc'
FONT_IDX = 2  # W6

def _load(size):
    return ImageFont.truetype(FONT, size, index=FONT_IDX)

def _fit(lines, target_h, max_w):
    size = max(8, int(target_h))
    while size < 200:
        f = _load(size)
        bb = f.getbbox('中')
        if (bb[3] - bb[1]) >= target_h:
            break
        size += 1
    while size > 8:
        f = _load(size)
        widest = max((f.getbbox(l)[2] - f.getbbox(l)[0]) for l in lines)
        if widest <= max_w:
            break
        size -= 1
    return f

def text_layer(w, h, text, target_h, style='white'):
    lines = text.split('\n')
    font = _fit(lines, target_h, w - 8)
    line_h = int(font.size * 1.08) + 1
    # 高度不够则逐级缩小
    while line_h * len(lines) > h and font.size > 8:
        font = _load(font.size - 1)
        line_h = int(font.size * 1.08) + 1
    stroke = max(1, int(font.size // 11)) if style == 'outline' else 0
    layer = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    total = line_h * len(lines)
    y = (h - total) // 2
    for ln in lines:
        bb = d.textbbox((0, 0), ln, font=font, stroke_width=stroke)
        x = (w - (bb[2] - bb[0])) // 2 - bb[0]
        if style == 'outline':
            d.text((x, y), ln, font=font, fill=(255, 255, 255, 255),
                   stroke_width=stroke, stroke_fill=(0, 0, 0, 255))
        elif style == 'white':
            d.text((x, y), ln, font=font, fill=(255, 255, 255, 255))
        else:  # alpha
            d.text((x, y), ln, font=font, fill=(255, 255, 255, 255))
        y += line_h
    if style == 'alpha':
        m = layer.split()[3]
        out = Image.new('RGBA', (w, h), (0, 0, 0, 0))
        out.putalpha(m)
        return out
    return layer

def replace(im, box, text, target_h, style):
    x0, y0, w, h = box
    im.paste(text_layer(w, h, text, target_h, style), (x0, y0))
    return im

if __name__ == '__main__':
    import sys, json
    src, dst, spec = sys.argv[1], sys.argv[2], sys.argv[3]
    im = Image.open(src).convert('RGBA')
    for it in json.loads(spec):
        replace(im, tuple(it['box']), it['text'], it.get('h', 20), it.get('style', 'white'))
    im.save(dst)
    print('saved', dst, im.size, 'regions', len(json.loads(spec)))
