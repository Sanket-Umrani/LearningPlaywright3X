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
margin = 40
header_font_size = 30
body_font_size = 18
row_height = 74

title_y = 30

try:
    font = ImageFont.truetype('arial.ttf', body_font_size)
    header_font = ImageFont.truetype('arial.ttf', header_font_size)
except Exception:
    font = ImageFont.load_default()
    header_font = ImageFont.load_default()

# Create image canvas
img = Image.new('RGB', (width, 2200), 'white')
draw = ImageDraw.Draw(img)

# Draw title
draw.text((margin, title_y), 'Arrays and Functions in JavaScript', fill='navy', font=header_font)

# Parse markdown table rows
rows = []
for line in lines:
    if line.strip().startswith('|'):
        cells = [c.strip() for c in line.split('|')[1:-1]]
        rows.append(cells)

# Find the first table header row and body rows
if len(rows) >= 2:
    header = rows[0]
    body_rows = rows[2:]
    column_widths = [180, 320, 620, 300]
    x_positions = [margin]
    for w in column_widths[:-1]:
        x_positions.append(x_positions[-1] + w)

    table_y = 110
    table_height = row_height * (len(body_rows) + 1)

    # Draw header background
    header_y = table_y
    for idx, col in enumerate(header):
        x0 = margin + sum(column_widths[:idx])
        y0 = header_y
        x1 = x0 + column_widths[idx]
        y1 = y0 + row_height
        draw.rectangle([x0, y0, x1, y1], fill='#1f4e78')
        draw.text((x0 + 8, y0 + 18), col, fill='white', font=font)

    # Draw body rows
    for r_idx, row in enumerate(body_rows):
        y0 = header_y + row_height * (r_idx + 1)
        y1 = y0 + row_height
        for c_idx, cell in enumerate(row):
            x0 = margin + sum(column_widths[:c_idx])
            x1 = x0 + column_widths[c_idx]
            draw.rectangle([x0, y0, x1, y1], outline='gray', fill='#f9f9f9')
            wrapped = textwrap.wrap(cell, width=max(14, int(column_widths[c_idx] / 9)))
            text_y = y0 + 8
            for part in wrapped[:3]:
                draw.text((x0 + 6, text_y), part, fill='black', font=font)
                text_y += 18

    # Draw outer border
    draw.rectangle([margin, table_y, margin + sum(column_widths), table_y + table_height], outline='black', width=2)

# Save image
img.save(out_path)
print(f'Created {out_path.resolve()}')
