# Key Visual — Design Rules & Layout Reference

Based on Breathpage's high-quality branding standard.
Reference style: Total Homes case study (6 variants).

---

## Canvas Spec
- Width: 1200px
- Height: 675px (16:9 landscape)
- Format: Self-contained HTML → PNG via PDFShift

---

## Layout

```
┌─────────────────────────────────────────────────────────┐
│ [LOGO]                                                   │
│                                    [HERO IMAGE - right]  │
│  MAIN HEADLINE                                           │
│  HERE                                                    │
│                                                          │
│  Supporting tagline text                                 │
│                                                          │
│ powered by Breathpage                                    │
└─────────────────────────────────────────────────────────┘
```

- Left zone (0–50%): Logo + Headline + Sub text
- Right zone (50–100%): Hero image with gradient overlay blending into background

---

## Style Variants

### modern
- Hero image: diagonal clip (clip-path parallelogram, skewX -8deg)
- Accent: thin vertical diagonal line between content and image
- Border radius: 0px
- Headline size: 54px, weight 900

### friendly
- Hero image: rounded corners (border-radius 24px), positioned top-right with padding
- Hero image has a visible border/frame: 3px solid rgba(255,255,255,0.15)
- Accent teardrop/blob shape: positioned bottom-left of hero frame, partially outside border
  background: [ACCENT], border-radius 60% 40% 60% 40%, size ~70x80px, z-index higher than image
- Optional second hero image (hero-2.jpg): smaller, bottom-left overlapping hero-1, border-radius 16px
- Headline size: 50px, weight 800

### stylish
- Hero image: full bleed right half, no clip, no border-radius
- Hero image has a visible border/frame: 3px solid rgba(255,255,255,0.12)
- Accent rectangle: bottom-right corner, partially outside image frame
  background: [ACCENT], size ~100x12px horizontal bar, z-index higher than image
- Geometric bracket lines: top-right corner of image frame, partially outside
  two lines forming an L-shape, color [ACCENT], 3px thick, 44px long
- Headline size: 62px, weight 900, color: [ACCENT] (not white — makes it pop)

### grit
- Background: Solid black or deepest version of [PRIMARY]
- Texture: Grainy noise overlay (opacity 0.15) covering the full canvas
- Accent: Thick solid vertical bar (12px width) on the far left edge using [ACCENT]
- Headline: All-caps, white, weight 900, letter-spacing -2px
- Layout: Content is tightly packed with a heavy, aggressive editorial feel
- Hero image: High contrast, black and white filter (optional), with a deep dark vignette

### zenith
- Background: White or very light tint of [PRIMARY] (95% lightness)
- Hero image: Positioned center-right, with a large floating card overlay
- Floating Card: Rounded corners (32px), background linear-gradient of [PRIMARY] to [ACCENT], padding 40px
- Accent: Pill-shaped labels (border-radius 50px) for small category text above headline
- Headline: Weight 800, color: white (inside card) or [PRIMARY] (if outside)
- Vibe: Clean, airy, corporate performance look

### impact
- Background: [PRIMARY] (dark) with a subtle dot pattern grid (size 20px) in the background
- Headline: "Highlighter" effect — specific words have a solid [ACCENT] background, text color becomes [PRIMARY]
- Hero image: Full height on the right, but with a heavy linear-gradient mask (to [PRIMARY]) to make text pop
- Accent: Thin horizontal "scanning" line (2px) across the top or bottom of the headline area
- Headline size: 58px, weight 900, extra bold
- Vibe: Direct, high-energy, expert-led branding

---

## Typography
- Primary font: DM Sans (Google Fonts) — headlines
- Secondary font: Poppins (Google Fonts) — body/sub text
- Company name label: 13px, DM Sans, letter-spacing 2px, opacity 0.6
- Headline: 50–62px, DM Sans 900, white, line-height 1.1
- Sub tagline: 14px, Poppins 400, white opacity 0.65, line-height 1.65
- Footer: 11px, DM Sans, "powered by Breathpage", opacity 0.35

---

## Colors
- Background: primary color from client (e.g. #1B2A4A)
- Headline + logo text: #ffffff
- Sub text: rgba(255,255,255,0.65)
- Accent shapes: accent color from client (e.g. #C8A84B)
- Gradient overlay: linear-gradient(to right, [primary] 40%, transparent 72%)
  Applied over full canvas so hero image blends smoothly into background

---

## Image Handling
- Always base64 encode both logo and hero image
- Logo: top-left, max height 44px, object-fit contain
- Hero image: right side, covers full height (675px), object-fit cover
- If no logo file provided: use company name as text fallback

```javascript
const fs = require('fs');
const path = require('path');

function imageToBase64(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return null;
  const ext = path.extname(filePath).replace('.', '').toLowerCase();
  const mime = ext === 'png' ? 'image/png'
             : ext === 'svg' ? 'image/svg+xml'
             : 'image/jpeg';
  const data = fs.readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${data}`;
}
```

---

## HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;800;900&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 1200px; height: 675px; overflow: hidden; }
  </style>
</head>
<body>
  <div style="width:1200px; height:675px; background:[PRIMARY]; position:relative; overflow:hidden; font-family:'DM Sans',sans-serif;">

    <!-- Hero Image -->
    <img src="[HERO_BASE64]" style="position:absolute; right:0; top:0; width:620px; height:675px; object-fit:cover; z-index:1; [CLIP_STYLE]" />

    <!-- Gradient Overlay -->
    <div style="position:absolute; inset:0; background:linear-gradient(to right, [PRIMARY] 40%, transparent 72%); z-index:2;"></div>

    <!-- Accent Decoration -->
    [ACCENT_HTML]

    <!-- Content -->
    <div style="position:absolute; left:60px; top:0; width:540px; height:100%; display:flex; flex-direction:column; justify-content:center; z-index:4;">
      [LOGO_OR_TEXT]
      <h1 style="font-size:[HEADLINE_SIZE]; font-weight:900; color:#fff; line-height:1.1; margin-bottom:20px;">[HEADLINE]</h1>
      <p style="font-size:14px; font-family:'Poppins'; color:rgba(255,255,255,0.65); line-height:1.65; max-width:370px;">[SUB]</p>
    </div>

    <!-- Footer -->
    <div style="position:absolute; bottom:18px; left:60px; font-size:11px; color:rgba(255,255,255,0.3); z-index:5; letter-spacing:1px;">
      powered by Breathpage
    </div>

  </div>
</body>
</html>
```

---

## Accent HTML per Style

### modern
```html
<div style="position:absolute; top:0; right:42%; width:4px; height:100%; background:[ACCENT]; transform:skewX(-8deg); opacity:0.75; z-index:3;"></div>
```

### friendly
```html
<!-- Hero image with border frame -->
<img src="[HERO_BASE64]" style="
  position:absolute;
  right:40px; top:40px;
  width:580px; height:595px;
  object-fit:cover;
  border-radius:24px;
  border:3px solid rgba(255,255,255,0.15);
  z-index:1;" />

<!-- Teardrop accent — bottom-left of hero frame, bleeds outside -->
<div style="
  position:absolute;
  right:580px; bottom:80px;
  width:70px; height:80px;
  background:[ACCENT];
  border-radius:60% 40% 60% 40%;
  z-index:3;
  opacity:0.95;">
</div>
```

### stylish
```html
<!-- Hero image with subtle border frame -->
<img src="[HERO_BASE64]" style="
  position:absolute;
  right:0; top:0;
  width:620px; height:675px;
  object-fit:cover;
  border-left:3px solid rgba(255,255,255,0.12);
  z-index:1;" />

<!-- Bracket lines — top-right corner, bleeds outside image -->
<div style="position:absolute; top:24px; right:24px; z-index:4;">
  <div style="width:50px; height:3px; background:[ACCENT];"></div>
  <div style="width:3px; height:50px; background:[ACCENT]; margin-left:47px; margin-top:-3px;"></div>
</div>

<!-- Accent rectangle bar — bottom-right, bleeds outside image -->
<div style="
  position:absolute;
  bottom:48px; right:0;
  width:120px; height:12px;
  background:[ACCENT];
  z-index:4;">
</div>
```

### grit
<!-- Left thick accent bar -->
<div style="position:absolute; left:0; top:0; width:12px; height:100%; background:[ACCENT]; z-index:5;"></div>

<!-- Grainy Noise Overlay -->
<div style="position:absolute; inset:0; background:url('https://www.transparenttextures.com/patterns/asfalt-dark.png'); opacity:0.15; z-index:2; pointer-events:none;"></div>

<!-- Override Headline Style: All-caps, tight spacing -->
<style>
  h1 { text-transform: uppercase; letter-spacing: -2px; }
</style>

### zenith
<!-- Background override (light) -->
<div style="position:absolute; inset:0; background:#f8f9fa; z-index:0;"></div>

<!-- Floating Gradient Card -->
<div style="
  position:absolute; 
  bottom:60px; left:50%; 
  transform:translateX(-50%); 
  width:850px; height:260px; 
  background:linear-gradient(135deg, [PRIMARY] 0%, [ACCENT] 100%); 
  border-radius:32px; 
  z-index:4; 
  display:flex; 
  flex-direction:column; 
  justify-content:center; 
  align-items:center; 
  text-align:center; 
  padding:40px; 
  box-shadow:0 30px 60px rgba(0,0,0,0.25);">
  <!-- Note: Sa Zenith, ang Headline at Sub text ay dapat nasa loob nito -->
</div>

### impact
<!-- Dot Pattern Background -->
<div style="
  position:absolute; 
  inset:0; 
  background-image: radial-gradient([ACCENT] 1px, transparent 1px); 
  background-size: 24px 24px; 
  opacity:0.12; 
  z-index:1;">
</div>

<!-- Highlighter effect style -->
<style>
  .highlight { background: [ACCENT]; color: [PRIMARY]; padding: 0 12px; display: inline-block; }
</style>
---

## Naming Convention
Output file: `output/[company-name]-[style].html`
Examples:
- output/total-homes-modern.html
- output/total-homes-friendly.html
- output/total-homes-stylish.html

---

## Common Mistakes to Avoid
- Never use `<img src="./path">` — always base64 encode
- Never exceed 1200x675px canvas
- Never use system fonts — always load from Google Fonts
- Always apply gradient overlay so text stays readable over hero image
- Z-index order: bg(0) → image(1) → overlay(2) → accents(3) → content(4) → footer(5)