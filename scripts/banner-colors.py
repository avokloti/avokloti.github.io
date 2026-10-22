# Samples each banner photo and writes soft background tints to
# src/data/banner-colors.json. Run again after adding or changing a banner:
#   python3 scripts/banner-colors.py
import colorsys, json, pathlib
from PIL import Image

def avg(im, top, bottom):
    w, h = im.size
    strip = im.crop((0, int(h * top), w, int(h * bottom))).resize((1, 1), Image.LANCZOS)
    return strip.getpixel((0, 0))

def lift(rgb, sat=1.35):
    h, s, v = colorsys.rgb_to_hsv(*[c / 255 for c in rgb])
    r, g, b = colorsys.hsv_to_rgb(h, min(1, s * sat), v)
    return (r * 255, g * 255, b * 255)

def signature(im):
    # The photo's most characteristic color: the strongest-colored of its main
    # colors, weighted by how much of the image it covers.
    small = im.resize((240, round(240 * im.height / im.width)))
    q = small.quantize(colors=8, method=Image.Quantize.MEDIANCUT)
    pal = q.getpalette()
    best, score = None, -1
    for count, idx in q.getcolors():
        rgb = tuple(pal[idx * 3: idx * 3 + 3])
        h, s, v = colorsys.rgb_to_hsv(*[c / 255 for c in rgb])
        if v < 0.15:
            continue
        sc = s * (count ** 0.5) * (0.5 + v)
        if sc > score:
            best, score = rgb, sc
    return best

def dark_tone(rgb, light, min_sat):
    # Keep the photo color's hue, but set it to a fixed dark lightness with enough
    # saturation to read as a color rather than near-black.
    h, l, sat = colorsys.rgb_to_hls(*[c / 255 for c in rgb])
    r, g, b = colorsys.hls_to_rgb(h, light, max(sat, min_sat) * 0.9)
    return '#%02x%02x%02x' % (round(r * 255), round(g * 255), round(b * 255))

def mix(a, b, t):  # t = share of a
    return '#%02x%02x%02x' % tuple(round(a[i] * t + b[i] * (1 - t)) for i in range(3))

out = {}
for p in sorted(pathlib.Path('public/images/banners').glob('*.jpg')):
    im = Image.open(p).convert('RGB')
    ground = lift(avg(im, 0.8, 1.0), 1.6)  # bottom edge, right above the page
    accent = lift(signature(im), 1.1)      # the photo's signature color
    out[f'/images/banners/{p.name}'] = {
        'light': [mix(ground, (255, 255, 255), 0.26), mix(accent, (255, 255, 255), 0.16)],
        'dark': [dark_tone(ground, 0.24, 0.30), dark_tone(accent, 0.21, 0.35)],
    }
json.dump(out, open('src/data/banner-colors.json', 'w'), indent=2)
print(json.dumps(out, indent=1))
