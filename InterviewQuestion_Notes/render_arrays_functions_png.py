from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import sys
import textwrap

script_dir = Path(__file__).resolve().parent

# Default files
input_name = 'Arrays&Functions.md'
output_name = 'Arrays&Functions.png'

# Allow custom filenames from the command line
if len(sys.argv) >= 2:
    input_name = sys.argv[1]
if len(sys.argv) >= 3:
    output_name = sys.argv[2]

# Resolve paths relative to the current working directory; fall back to the script folder
md_path = Path(input_name)
if not md_path.is_absolute():
    md_path = (Path.cwd() / md_path).resolve()

out_path = Path(output_name)
if not out_path.is_absolute():
    out_path = (Path.cwd() / out_path).resolve()

text = md_path.read_text(encoding='utf-8')
lines = text.splitlines()

width = 2200
margin = 60
body_font_size = 20
heading_font_size = 28
subheading_font_size = 24
line_height = 28
max_chars_per_line = 110

title_y = 30

try:
    font = ImageFont.truetype('arial.ttf', body_font_size)
    heading_font = ImageFont.truetype('arial.ttf', heading_font_size)
    subheading_font = ImageFont.truetype('arial.ttf', subheading_font_size)
except Exception:
    font = ImageFont.load_default()
    heading_font = ImageFont.load_default()
    subheading_font = ImageFont.load_default()

# Determine a title from the markdown content
page_title = 'JavaScript Notes'
for line in lines:
    stripped = line.strip()
    if stripped.startswith('# '):
        page_title = stripped[2:].strip()
        break
    if stripped.startswith('## '):
        page_title = stripped[3:].strip()
        break

# Build a simple render plan from the markdown lines
render_blocks = []
for raw_line in lines:
    stripped = raw_line.strip()
    if not stripped:
        render_blocks.append(('blank', ''))
        continue

    if stripped.startswith('```'):
        continue

    if stripped.startswith('### '):
        render_blocks.append(('heading3', stripped[4:].strip()))
    elif stripped.startswith('## '):
        render_blocks.append(('heading2', stripped[3:].strip()))
    elif stripped.startswith('# '):
        render_blocks.append(('heading1', stripped[2:].strip()))
    elif stripped.startswith('- '):
        render_blocks.append(('bullet', stripped[2:].strip()))
    elif stripped.startswith('* '):
        render_blocks.append(('bullet', stripped[2:].strip()))
    else:
        render_blocks.append(('text', stripped))

# Measure content height
estimated_height = 160
for block in render_blocks:
    kind, content = block
    if kind == 'blank':
        estimated_height += 16
    else:
        wrapped = textwrap.wrap(content, width=max_chars_per_line)
        estimated_height += max(1, len(wrapped)) * line_height + 6

height = max(2200, estimated_height + 80)
img = Image.new('RGB', (width, height), 'white')
draw = ImageDraw.Draw(img)

# Draw title
try:
    draw.text((margin, title_y), page_title, fill='navy', font=heading_font)
except Exception:
    draw.text((margin, title_y), page_title, fill='navy')

# Render content
current_y = 120
for block in render_blocks:
    kind, content = block
    if kind == 'blank':
        current_y += 16
        continue

    if kind == 'heading1':
        font_to_use = heading_font
        x_offset = margin
        current_y += 12
    elif kind == 'heading2':
        font_to_use = subheading_font
        x_offset = margin + 10
        current_y += 8
    elif kind == 'heading3':
        font_to_use = font
        x_offset = margin + 20
        current_y += 6
    elif kind == 'bullet':
        font_to_use = font
        x_offset = margin + 20
        content = f'• {content}'
    else:
        font_to_use = font
        x_offset = margin

    wrapped_lines = textwrap.wrap(content, width=max_chars_per_line)
    for line in wrapped_lines:
        draw.text((x_offset, current_y), line, fill='black', font=font_to_use)
        current_y += line_height

    current_y += 6

# Save image
img.save(out_path)
print(f'Created {out_path.resolve()}')
