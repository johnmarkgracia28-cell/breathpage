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

const config = {
  company: 'Total Homes and Developments',
  headline: 'Crafting Exceptional Homes,<br>Building Lasting Trust',
  sub: 'Blending timeless design, sustainability, and unmatched quality to create homes that inspire and endure.',
  primary: '#1B2A4A',
  accent: '#C8A84B',
  logoPath: './assets/logo.png',
  hero1Path: './assets/hero-1.jpg',
  hero2Path: './assets/hero-2.jpg',
};

const logo = imageToBase64(config.logoPath);
const hero1 = imageToBase64(config.hero1Path);
const hero2 = imageToBase64(config.hero2Path);

const logoHtml = logo
  ? `<img src="${logo}" style="max-height:44px; object-fit:contain; margin-bottom:36px;" />`
  : `<div style="font-size:13px;letter-spacing:2px;opacity:0.6;margin-bottom:36px;">${config.company}</div>`;

const fonts = `<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;800;900&family=Poppins:wght@400;600&display=swap" rel="stylesheet">`;

const baseStyle = `* { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 1200px; height: 675px; overflow: hidden; }`;

function modern() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  ${fonts}
  <style>${baseStyle}</style>
</head>
<body>
  <div style="width:1200px;height:675px;background:${config.primary};position:relative;overflow:hidden;font-family:'DM Sans',sans-serif;">

    <!-- Hero Image — diagonal clip -->
    <img src="${hero1}" style="position:absolute;right:0;top:0;width:640px;height:675px;object-fit:cover;z-index:1;clip-path:polygon(8% 0%,100% 0%,100% 100%,0% 100%);" />

    <!-- Gradient Overlay -->
    <div style="position:absolute;inset:0;background:linear-gradient(to right,${config.primary} 40%,transparent 72%);z-index:2;"></div>

    <!-- Accent — diagonal line -->
    <div style="position:absolute;top:0;right:42%;width:4px;height:100%;background:${config.accent};transform:skewX(-8deg);opacity:0.75;z-index:3;"></div>

    <!-- Content -->
    <div style="position:absolute;left:60px;top:0;width:540px;height:100%;display:flex;flex-direction:column;justify-content:center;z-index:4;">
      ${logoHtml}
      <h1 style="font-size:54px;font-weight:900;color:#fff;line-height:1.1;margin-bottom:20px;">${config.headline}</h1>
      <p style="font-size:14px;font-family:'Poppins',sans-serif;color:rgba(255,255,255,0.65);line-height:1.65;max-width:370px;">${config.sub}</p>
    </div>

    <!-- Footer -->
    <div style="position:absolute;bottom:18px;left:60px;font-size:11px;color:rgba(255,255,255,0.3);z-index:5;letter-spacing:1px;">powered by Breathpage</div>

  </div>
</body>
</html>`;
}

function friendly() {
  const hero2Html = hero2
    ? `<img src="${hero2}" style="position:absolute;right:480px;bottom:40px;width:200px;height:160px;object-fit:cover;border-radius:16px;border:3px solid rgba(255,255,255,0.18);z-index:3;" />`
    : '';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  ${fonts}
  <style>${baseStyle}</style>
</head>
<body>
  <div style="width:1200px;height:675px;background:${config.primary};position:relative;overflow:hidden;font-family:'DM Sans',sans-serif;">

    <!-- Hero Image — rounded with frame -->
    <img src="${hero1}" style="position:absolute;right:40px;top:40px;width:580px;height:595px;object-fit:cover;border-radius:24px;border:3px solid rgba(255,255,255,0.15);z-index:1;" />

    <!-- Gradient Overlay -->
    <div style="position:absolute;inset:0;background:linear-gradient(to right,${config.primary} 40%,transparent 72%);z-index:2;"></div>

    <!-- Teardrop accent — bottom-left of hero frame -->
    <div style="position:absolute;right:580px;bottom:80px;width:70px;height:80px;background:${config.accent};border-radius:60% 40% 60% 40%;z-index:3;opacity:0.95;"></div>

    <!-- Second hero image — small, bottom-left overlap -->
    ${hero2Html}

    <!-- Content -->
    <div style="position:absolute;left:60px;top:0;width:520px;height:100%;display:flex;flex-direction:column;justify-content:center;z-index:4;">
      ${logoHtml}
      <h1 style="font-size:50px;font-weight:800;color:#fff;line-height:1.15;margin-bottom:20px;">${config.headline}</h1>
      <p style="font-size:14px;font-family:'Poppins',sans-serif;color:rgba(255,255,255,0.65);line-height:1.65;max-width:370px;">${config.sub}</p>
    </div>

    <!-- Footer -->
    <div style="position:absolute;bottom:18px;left:60px;font-size:11px;color:rgba(255,255,255,0.3);z-index:5;letter-spacing:1px;">powered by Breathpage</div>

  </div>
</body>
</html>`;
}

function stylish() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  ${fonts}
  <style>${baseStyle}</style>
</head>
<body>
  <div style="width:1200px;height:675px;background:${config.primary};position:relative;overflow:hidden;font-family:'DM Sans',sans-serif;">

    <!-- Hero Image — full bleed right, subtle left border -->
    <img src="${hero1}" style="position:absolute;right:0;top:0;width:620px;height:675px;object-fit:cover;border-left:3px solid rgba(255,255,255,0.12);z-index:1;" />

    <!-- Gradient Overlay -->
    <div style="position:absolute;inset:0;background:linear-gradient(to right,${config.primary} 40%,transparent 72%);z-index:2;"></div>

    <!-- Bracket lines — top-right corner -->
    <div style="position:absolute;top:24px;right:24px;z-index:4;">
      <div style="width:50px;height:3px;background:${config.accent};"></div>
      <div style="width:3px;height:50px;background:${config.accent};margin-left:47px;margin-top:-3px;"></div>
    </div>

    <!-- Accent bar — bottom-right -->
    <div style="position:absolute;bottom:48px;right:0;width:120px;height:12px;background:${config.accent};z-index:4;"></div>

    <!-- Content -->
    <div style="position:absolute;left:60px;top:0;width:540px;height:100%;display:flex;flex-direction:column;justify-content:center;z-index:4;">
      ${logoHtml}
      <h1 style="font-size:62px;font-weight:900;color:${config.accent};line-height:1.08;margin-bottom:20px;">${config.headline}</h1>
      <p style="font-size:14px;font-family:'Poppins',sans-serif;color:rgba(255,255,255,0.65);line-height:1.65;max-width:370px;">${config.sub}</p>
    </div>

    <!-- Footer -->
    <div style="position:absolute;bottom:18px;left:60px;font-size:11px;color:rgba(255,255,255,0.3);z-index:5;letter-spacing:1px;">powered by Breathpage</div>

  </div>
</body>
</html>`;
}

if (!fs.existsSync('./output')) fs.mkdirSync('./output');

fs.writeFileSync('./output/total-homes-modern.html', modern());
console.log('✓ output/total-homes-modern.html');

fs.writeFileSync('./output/total-homes-friendly.html', friendly());
console.log('✓ output/total-homes-friendly.html');

fs.writeFileSync('./output/total-homes-stylish.html', stylish());
console.log('✓ output/total-homes-stylish.html');
