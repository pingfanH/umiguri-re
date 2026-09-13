import struct, sys, glob, os, re

def walk(path):
    d = open(path, 'rb').read()
    STR = struct.unpack_from('<I', d, 16)[0]
    def u8(o): return d[o]
    def u16(o): return struct.unpack_from('<H', d, o)[0]
    def u32(o): return struct.unpack_from('<I', d, o)[0]
    def i16(o): return struct.unpack_from('<h', d, o)[0]
    def s(o):
        e = d.index(0, STR + o)
        return d[STR + o:e].decode('utf-8', 'replace')
    atlases = {}
    pos = 20
    while pos < len(d):
        ct = u32(pos); pos += 4
        if ct == 1381324884:  # TXUR
            n = u32(pos); pos += 4
            for _ in range(n):
                key = s(u32(pos)); pos += 4
                ed = s(u32(pos)); pos += 4
                pos += 2 + 2 + 4 + 8
                c = u32(pos); pos += 4
                regs = []
                for _ in range(c):
                    nm = s(u32(pos)); pos += 4
                    ou = i16(pos); pos += 2; Oa = i16(pos); pos += 2
                    L = i16(pos); pos += 2; H = i16(pos); pos += 2
                    regs.append((nm, ou, Oa, L, H))
                atlases[key] = (ed, regs)
        elif ct == 1230261830:  # FNTI: count; each name+ed
            n = u32(pos); pos += 4
            for _ in range(n):
                pos += 8
        elif ct == 1398033990:  # FNTS: count; each name+subcount+sub*20
            n = u32(pos); pos += 4
            for _ in range(n):
                pos += 4
                c = u32(pos); pos += 4
                pos += c * 20
        elif ct == 1414415955:  # SFNT: count; each name+subcount+sub*12
            n = u32(pos); pos += 4
            for _ in range(n):
                pos += 4
                c = u32(pos); pos += 4
                pos += c * 12
        elif ct == 1280525899:  # KFSL
            n = u32(pos); pos += 4
            for _ in range(n):
                pos += 4
                c = u32(pos); pos += 4
                for _ in range(c):
                    pos += 4
                    n2 = u32(pos); pos += 4
                    pos += n2 * 12
        elif ct == 1364414017:  # ACTQ
            n = u32(pos); pos += 4
            for _ in range(n):
                pos += 4
                c = u32(pos); pos += 4
                pos += c * 16
        elif ct == 1414351941:  # ELMT
            stack = [1]
            while True:
                fi = u32(pos); pos += 4
                if fi == 255:
                    stack.pop()
                    if not stack: break
                    continue
                cont = u8(pos); pos += 1
                pos += 1
                flags = u16(pos); pos += 2
                pos += 4 + 4 + 16
                pos += 16 if (flags & 4096) else 4
                pos += (3 + 3 + 3 + 2) * 4
                pos += 4 + 12 + 16 + 8 + 4
                pc = u32(pos); pos += 4
                pos += pc * 16
                if fi == 1381324884:
                    pos += 4 + 4 + 16
                    v = u32(pos); pos += 4
                    if v & 8: pos += 16
                    if v & 16: pos += 32
                elif fi == 1415071060:
                    pos += 4 + 4
                    v = u32(pos); pos += 4
                    pos += 16 + 8 + 4 + 4 + 8
                    if v & 128: pos += 4
                elif fi == 1481920595: pos += 4 + 4 + 4 + 12
                elif fi == 1381256262: pos += 4 + 2 + 32 + 16
                if cont & 1: stack.append(1)
        elif ct == 1380206675:
            n = u32(pos); pos += 4
            for _ in range(n):
                pos += 4 + 4
        else:
            break
    return atlases

if __name__ == '__main__':
    pat = re.compile(r'text|msg|label|caption|desc|hint|str', re.I)
    for f in sorted(glob.glob(sys.argv[1])):
        name = os.path.basename(f).replace('.rsb.rsb', '')
        try:
            at = walk(f)
        except Exception as e:
            print(name, 'ERR', e); continue
        hits = []
        for atlas, (ed, regs) in at.items():
            tx = [r[0] for r in regs if pat.search(r[0])]
            if tx:
                hits.append((atlas, len(regs), len(tx), tx))
        if hits:
            print(f'## {name}')
            for a, tot, tx, names in hits:
                print(f'   {a}  ({tot} regs, {tx} text)')
                print('      ', names[:12], '...' if len(names) > 12 else '')
