# Key Visual Generator

## Overview
This project generates professional key visuals (branded marketing graphics) for Breathpage clients.
Output is a high-quality HTML file converted to PNG via PDFShift API.

## Read First
Before doing anything, read `skills/KEY-VISUAL.md` for design rules and layout reference.

## Project Structure
```
key-visual-generator/
├── CLAUDE.md
├── skills/
│   └── key-visual.md
├── assets/
│   ├── logo.png       ← client logo (transparent bg preferred)
│   └── hero.jpg       ← main photo or property image
└── output/
    └── (generated HTML files go here)
```

## How to Generate a Key Visual
When asked to generate a key visual, ask for the following if not provided:
- Company name
- Main headline (tagline)
- Supporting text (1-2 sentences)
- Primary color + accent color (hex codes)
- Style: modern / friendly / stylish
- Logo file location
- Hero image file location

Then generate a self-contained HTML file saved to the `output/` folder.

## Output Rules
- Canvas size: 1200x675px
- Always base64 encode logo and hero image (for PDFShift compatibility)
- Load fonts from Google Fonts: DM Sans + Poppins
- Save output as `output/[company-name]-[style].html`
- Always add "powered by Breathpage" in the footer

## Converting to PNG
After generating the HTML, the user will run:
```
node convert.js --input ./output/filename.html
```
This sends the HTML to PDFShift and saves a PNG.
Requires `PDFSHIFT_API_KEY` in `.env` file.