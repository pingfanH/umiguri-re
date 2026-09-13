import sys, struct
from PIL import Image
import etcpak

def dxt5_header(w, h):
    size = ((w + 3) // 4) * ((h + 3) // 4) * 16
    b = bytearray(128)
    struct.pack_into('<I', b, 0, 0x20534444)   # 'DDS '
    struct.pack_into('<I', b, 4, 124)          # dwSize
    struct.pack_into('<I', b, 8, 0x81007)      # dwFlags
    struct.pack_into('<I', b, 12, h)           # height
    struct.pack_into('<I', b, 16, w)           # width
    struct.pack_into('<I', b, 20, size)        # pitchOrLinearSize
    struct.pack_into('<I', b, 24, 1)           # depth
    struct.pack_into('<I', b, 28, 1)           # mipMapCount
    struct.pack_into('<I', b, 76, 32)          # pf.dwSize
    struct.pack_into('<I', b, 80, 4)           # pf.dwFlags = DDPF_FOURCC
    struct.pack_into('<4s', b, 84, b'DXT5')    # pf.dwFourCC
    struct.pack_into('<I', b, 108, 0x1000)     # dwCaps
    return bytes(b)

def to_dxt5(rgba_dds, out):
    im = Image.open(rgba_dds).convert('RGBA')
    data = etcpak.compress_to_dxt5(im.tobytes(), im.width, im.height)
    open(out, 'wb').write(dxt5_header(im.width, im.height) + data)
    print(f'{out}: {im.size} DXT5 {128 + len(data)} bytes')

if __name__ == '__main__':
    to_dxt5(sys.argv[1], sys.argv[2])
