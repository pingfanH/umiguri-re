import struct, sys

def parse(path):
    d = open(path, 'rb').read()
    STR = struct.unpack_from('<I', d, 16)[0]
    def rd_s(p):
        if p == 0: return ''
        e = d.index(b'\0', STR + p)
        return d[STR + p:e].decode('utf-8', 'replace')
    # 找 ELMT chunk(无 count, 直接是元素流; 根容器由 255 收尾)
    target = 1414351941
    elmt = None
    for i in range(20, len(d) - 8):
        if struct.unpack_from('<I', d, i)[0] == target:
            elmt = i + 4
            break
    p = elmt
    out = []
    depth = 0
    def u32(p): return struct.unpack_from('<I', d, p)[0], p+4
    def u8(p):  return d[p], p+1
    def f32(p): return struct.unpack_from('<f', d, p)[0], p+4
    def skip(p, n): return p+n
    while p < len(d):
        typ, p = u32(p)
        if typ == 255:
            depth -= 1
            continue
        start = p - 4
        idx, p = u32(p)
        flag, p = u32(p)
        Md, p = u32(p)
        c, p = u8(p)
        ctref, p = u32(p)
        edref, p = u32(p)
        Te, p = u32(p); Qt, p = u32(p); Le, p = u32(p); G0, p = u32(p)
        p = skip(p, 4*4) if (c & 4096) else skip(p, 16*4)
        p = skip(p, (3+3+3+2)*4)
        p = skip(p, 4)
        p = skip(p, 3*4)
        p = skip(p, 16)
        p = skip(p, 2*4)
        p = skip(p, 4)
        u, p = u32(p)
        p = skip(p, u*(4+1+2+4+4))
        if typ == 2:
            p = skip(p, 4+4); p = skip(p, 4*4)
            v, p = u32(p)
            if v & 8: p = skip(p, 4*4)
            if v & 16:
                p = skip(p, 4+4*4+4+2*4)
        elif typ == 3:
            p = skip(p, 4+4)
            v, p = u32(p)
            p = skip(p, 4*4 + 4+4 + 4*4 + 4)
            p = skip(p, 8)
            if v & 128: p = skip(p, 4)
        elif typ == 4:
            p = skip(p, 4+4); v, p = u32(p); p = skip(p, 3*4)
        elif typ == 5:
            p = skip(p, 4+1+8*4); p = skip(p, 16)
        out.append(dict(name=rd_s(ctref), Ed=rd_s(edref), typ=typ, idx=idx,
                        Te=Te, Qt=Qt, Le=Le, G0=G0, depth=depth, start=start, end=p))
        if flag & 1:
            depth += 1
    return out

for e in parse(sys.argv[1]):
    if any(k in e['name'] for k in ('keyGuide', 'textMenuCursor', 'pageDataState', 'textMenuSongs', 'textMenuSongsValue')):
        print(f"  {'  '*e['depth']}{e['name']:34s} typ={e['typ']} Te={e['Te']:5d} Qt={e['Qt']:5d} Le={e['Le']:4d} G0={e['G0']:4d}  bytes[{e['start']}:{e['end']}] Ed={e['Ed']!r}")
