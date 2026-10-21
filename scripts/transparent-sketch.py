# Makes the white background of a sketch transparent, keeping white areas
# inside the drawing (only white connected to the image edges is removed),
# with soft anti-aliased edges. Usage: python3 transparent-sketch.py in.png out.png
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

src, dst = sys.argv[1], sys.argv[2]
orig = Image.open(src).convert('RGBA')
a0 = np.asarray(orig)[..., 3]
if (a0 < 10).mean() > 0.05:
    # Already has a transparent background: just trim the empty margins.
    orig.crop(orig.getbbox()).save(dst, optimize=True)
    print(dst, 'kept existing transparency', orig.crop(orig.getbbox()).size)
    sys.exit()
im = np.asarray(orig.convert('RGB')).astype(np.float32)
light = im.min(axis=2)                       # darkest channel: high only for near-white
near_white = light > 236
labels, _ = ndimage.label(near_white)
edge = np.unique(np.concatenate([labels[0], labels[-1], labels[:, 0], labels[:, -1]]))
background = np.isin(labels, edge[edge > 0])

# Soft edge: pixels within 3 px of the background fade by how light they are.
dist = ndimage.distance_transform_edt(~background)
alpha = np.ones_like(light)
alpha[background] = 0
ring = (~background) & (dist <= 3)
alpha[ring] = np.clip((255 - light[ring]) / (255 - 150), 0, 1) ** 0.8

# Remove the white fringe from semi-transparent edge pixels (un-premultiply over white).
rgb = im.copy()
a = alpha[..., None]
safe = np.where(a > 0.02, a, 1)
rgb = np.clip((rgb - 255 * (1 - a)) / safe, 0, 255)

out = np.dstack([rgb, alpha * 255]).astype(np.uint8)
img = Image.fromarray(out, 'RGBA')
img = img.crop(img.getbbox())                # trim empty margins
img.save(dst, optimize=True)
print(dst, img.size)
