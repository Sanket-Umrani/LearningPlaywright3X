from pathlib import Path
import sys

try:
    from markdown import markdown
except ImportError:
    raise SystemExit("Install the markdown package: python -m pip install markdown")

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    raise SystemExit("Install Playwright: python -m pip install playwright")


def md_to_html(md_text: str) -> str:
    body_html = markdown(md_text, extensions=["tables"])
    return f"""<!doctype html>
<html lang=\"en\">
<head>
  <meta charset=\"utf-8\">
  <title>Markdown Table Preview</title>
  <style>
    body {{ font-family: Arial, sans-serif; padding: 24px; background: #f6f8fa; }}
    table {{ width: 100%; border-collapse: collapse; background: white; }}
    th, td {{ border: 1px solid #cbd5e1; padding: 12px 14px; text-align: left; vertical-align: top; }}
    th {{ background: #1f2937; color: #f8fafc; }}
    tbody tr:nth-child(even) {{ background: #f8fafc; }}
    code {{ background: #eef2ff; color: #1d4ed8; padding: 2px 4px; border-radius: 3px; }}
  </style>
</head>
<body>
{body_html}
</body>
</html>"""


def render_png(md_path: Path, png_path: Path) -> None:
    md_path = md_path.resolve()
    markdown_text = md_path.read_text(encoding="utf-8")
    html = md_to_html(markdown_text)
    html_path = md_path.with_suffix(".preview.html").resolve()
    html_path.write_text(html, encoding="utf-8")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1400, "height": 900})
        page.goto(html_path.as_uri())
        page.wait_for_timeout(500)
        page.screenshot(path=str(png_path.resolve()), full_page=True)
        browser.close()

    html_path.unlink(missing_ok=True)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python render_md_table_to_png.py <path/to/file.md>")
        sys.exit(1)

    md_file = Path(sys.argv[1])
    if not md_file.exists() or md_file.suffix.lower() != ".md":
        raise SystemExit("Provide a valid .md file path.")

    png_file = md_file.with_suffix(".png")
    render_png(md_file, png_file)
    print(f"Saved PNG: {png_file}")
