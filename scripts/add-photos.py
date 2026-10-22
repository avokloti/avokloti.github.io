"""Prepare photos for the Art page: resize, add a light credit, strip metadata.

Usage:
  python3 scripts/add-photos.py SLUG=path/to/photo.jpg [SLUG=path ...]

For each photo this writes public/images/photos/SLUG.jpg (at most 2000 px on
the long side) and SLUG-thumb.jpg (700 px wide), each with a small
"© Irina Tolkova" in the bottom-right corner. Location (GPS) and all other
metadata are dropped. HEIC files work too (pip install pillow-heif).
Then add {"slug", "alt", "w", "h"} for each photo to src/data/gallery.json.
"""
import json, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps
try:
    import pillow_heif; pillow_heif.register_heif_opener()
except ImportError:
    pass

CREDIT = '© Irina Tolkova'
OUT = Path(__file__).resolve().parent.parent / 'public/images/photos'
# Spectral (SIL Open Font License), from Google Fonts / @fontsource/spectral
FONTS = [str(Path(__file__).resolve().parent / 'fonts/Spectral-Medium.ttf'), '/usr/share/fonts/opentype/inter/Inter-Medium.otf', '/System/Library/Fonts/Helvetica.ttc', 'DejaVuSans.ttf']

def font(size):
    for f in FONTS:
        try: return ImageFont.truetype(f, size)
        except OSError: pass
    return ImageFont.load_default()

def credit(im):
    w, h = im.size
    size = max(10, round(min(w, h) * 0.0225))
    f = font(size)
    l, t, r, b = f.getbbox(CREDIT)
    pad = round(size * 0.9)
    x, y = w - pad - (r - l), h - pad - (b - t) - t
    shadow = Image.new('L', im.size, 0)
    ImageDraw.Draw(shadow).text((x, y), CREDIT, font=f, fill=110)
    shadow = shadow.filter(ImageFilter.GaussianBlur(size * 0.12))
    text = Image.new('L', im.size, 0)
    ImageDraw.Draw(text).text((x, y), CREDIT, font=f, fill=150)   # about 60% opaque
    out = Image.composite(Image.new('RGB', im.size, (0, 0, 0)), im, shadow)
    return Image.composite(Image.new('RGB', im.size, (255, 255, 255)), out, text)

entries = []
for arg in sys.argv[1:]:
    slug, path = arg.split('=', 1)
    im = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    im.thumbnail((2000, 2000), Image.LANCZOS)
    full = credit(im)
    full.save(OUT / f'{slug}.jpg', quality=86, optimize=True, progressive=True)   # no exif= so metadata is dropped
    th = im.resize((700, round(700 * im.height / im.width)), Image.LANCZOS)
    credit(th).save(OUT / f'{slug}-thumb.jpg', quality=82, optimize=True, progressive=True)
    entries.append({'slug': slug, 'w': full.width, 'h': full.height})
print(json.dumps(entries, indent=1))
