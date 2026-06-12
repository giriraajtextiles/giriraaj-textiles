import os

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Giriraj Textiles — Concept 13: Industrial Hero</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@200;400;600;700;800&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  /* Palette from 02 combined with 12 */
  --cream: #F5F2ED;
  --charcoal: #1A1A1A;
  --warm: #E8751A; /* Saffron extracted from 06 */
  --rust-light: rgba(232,117,26,0.1);
  --slate: #3D4A52;
  --warm-grey: #8A8279;
  --light-border: rgba(26,26,26,0.08);
  --white: #FFFFFF;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Manrope', sans-serif;
  background: var(--cream);
  color: var(--charcoal);
  overflow-x: hidden;
}

/* Background Weave (from 02) */
.weave-pattern {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  background:
    repeating-linear-gradient(0deg, transparent, transparent 39px, var(--light-border) 39px, var(--light-border) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 39px, var(--light-border) 39px, var(--light-border) 40px);
  opacity: 0.6;
}

nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .logo {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

nav ul {
  display: flex;
  gap: 32px;
  list-style: none;
}

nav a {
  font-family: 'Sora', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--charcoal);
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.3s;
}

nav a:hover { opacity: 1; color: var(--warm); }

/* Hero Section (Split Layout from 02) */
.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 1;
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 64px 80px;
  position: relative;
}

.hero-left::after {
  content: '';
  position: absolute;
  right: 0;
  top: 15%;
  height: 70%;
  width: 1px;
  background: var(--light-border);
}

.hero-left h1 {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: clamp(40px, 5vw, 80px);
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.hero-left h1 span.accent {
  color: var(--warm);
}

.hero-left .hero-desc {
  font-family: 'Source Serif 4', serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--warm-grey);
  margin-top: 36px;
  max-width: 440px;
}

/* Spinning Yarn (from 12) */
.hero-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.yarn-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.yarn-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.yarn-ring-1 {
  width: 200px; height: 200px;
  border-color: rgba(232,117,26,0.3);
  animation: spin 20s linear infinite;
}

.yarn-ring-2 {
  width: 320px; height: 320px;
  border-color: rgba(26,26,26,0.1);
  animation: spin 30s linear infinite reverse;
}

.yarn-ring-3 {
  width: 440px; height: 440px;
  border-color: rgba(232,117,26,0.15);
  animation: spin 40s linear infinite;
}

.yarn-ring-4 {
  width: 560px; height: 560px;
  border-color: rgba(26,26,26,0.05);
  animation: spin 50s linear infinite reverse;
}

.yarn-strand {
  position: absolute;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--warm), transparent);
  opacity: 0.3;
  top: 50%;
  left: 50%;
  transform-origin: top center;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Woven Grid (from 02) */
.section-woven {
  position: relative;
  z-index: 1;
  padding: 120px 64px;
}

.woven-header {
  margin-bottom: 80px;
}

.woven-header h2 {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: clamp(28px, 3.5vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.woven-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

.woven-item {
  position: relative;
  background: var(--white);
  border: 1px solid var(--light-border);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 240px;
  transition: all 0.5s ease;
}

.woven-item:hover {
  background: var(--charcoal);
  border-color: var(--charcoal);
}

.woven-item:hover h3,
.woven-item:hover p,
.woven-item:hover .item-num { color: var(--white); }
.woven-item:hover .item-line { background: var(--warm); }

.woven-item .item-num {
  font-size: 9px;
  letter-spacing: 0.2em;
  color: var(--warm-grey);
  margin-bottom: 12px;
  transition: color 0.5s;
}

.woven-item h3 {
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
  transition: color 0.5s;
}

.woven-item p {
  font-family: 'Source Serif 4', serif;
  font-size: 13px;
  line-height: 1.6;
  color: var(--warm-grey);
  transition: color 0.5s;
}

.woven-item .item-line {
  position: absolute;
  bottom: 0; left: 0;
  width: 100%;
  height: 3px;
  background: var(--light-border);
  transition: background 0.5s;
}

/* Product Spec Cards (from 12) */
.section-product-hero {
  position: relative;
  z-index: 1;
  padding: 120px 64px;
  border-top: 1px solid var(--light-border);
}

.product-hero-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.ph-card {
  position: relative;
  aspect-ratio: 3/4;
  background: var(--white);
  border: 1px solid var(--light-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 36px;
  transition: all 0.5s ease;
}

.ph-card:hover {
  border-color: var(--warm);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.ph-card .ph-num {
  position: absolute;
  top: 24px;
  left: 24px;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--warm-grey);
}

.ph-card .ph-name {
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 8px;
  position: relative;
}

.ph-card .ph-desc {
  font-family: 'Source Serif 4', serif;
  font-size: 14px;
  line-height: 1.6;
  color: var(--warm-grey);
  position: relative;
}

.ph-card .ph-spec {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--warm);
  margin-top: 24px;
  position: relative;
}

/* Quote Section */
.section-quote {
  position: relative;
  z-index: 1;
  padding: 160px 64px;
  text-align: center;
  border-top: 1px solid var(--light-border);
}

.section-quote blockquote {
  font-family: 'Source Serif 4', serif;
  font-style: italic;
  font-weight: 300;
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.4;
  max-width: 800px;
  margin: 0 auto;
  color: var(--slate);
}

/* Responsive CSS */
@media (max-width: 768px) {
  body, html { overflow-x: hidden; width: 100%; }
  .hero-left h1 { font-size: 3rem !important; }
  .hero-left .hero-desc { font-size: 1rem !important; }
  section, .hero, .hero-left, .section-woven, .section-product-hero, .section-quote { 
    padding: 40px 20px !important; 
  }
  .hero, .woven-grid, .product-hero-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 24px !important;
  }
  .yarn-form { transform: scale(0.6) translate(-50%, -50%); position: relative; height: 300px; }
  .hero-left::after { display: none; }
}

</style>
</head>
<body>

<div class="weave-pattern"></div>

<nav>
  <div class="logo">Giriraj</div>
  <ul>
    <li><a href="#">Capabilities</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Legacy</a></li>
  </ul>
</nav>

<section class="hero">
  <div class="hero-left">
    <h1>Building India's <span class="accent">textile backbone</span></h1>
    <div class="hero-desc">Three decades of manufacturing synthetic yarn that powers India's industrial supply chains — from geotextiles to packaging, from ropes to composites.</div>
  </div>
  <div class="hero-right">
    <div class="yarn-form">
      <div class="yarn-ring yarn-ring-1"></div>
      <div class="yarn-ring yarn-ring-2"></div>
      <div class="yarn-ring yarn-ring-3"></div>
      <div class="yarn-ring yarn-ring-4"></div>
      <div class="yarn-strand" style="height: 180px; transform: translate(-50%, -50%) rotate(15deg);"></div>
      <div class="yarn-strand" style="height: 240px; transform: translate(-50%, -50%) rotate(45deg);"></div>
      <div class="yarn-strand" style="height: 300px; transform: translate(-50%, -50%) rotate(-30deg);"></div>
      <div class="yarn-strand" style="height: 200px; transform: translate(-50%, -50%) rotate(75deg);"></div>
      <div class="yarn-strand" style="height: 280px; transform: translate(-50%, -50%) rotate(-60deg);"></div>
    </div>
  </div>
</section>

<section class="section-woven">
  <div class="woven-header">
    <h2>Industrial Pillars</h2>
  </div>
  <div class="woven-grid">
    <div class="woven-item">
      <span class="item-num">01</span>
      <h3>Polypropylene</h3>
      <p>High-tenacity PP yarn for woven sacks, geotextiles, and industrial fabrics.</p>
      <div class="item-line"></div>
    </div>
    <div class="woven-item">
      <span class="item-num">02</span>
      <h3>Polyester</h3>
      <p>Fully drawn polyester yarn with superior tensile strength for technical textiles.</p>
      <div class="item-line"></div>
    </div>
    <div class="woven-item">
      <span class="item-num">03</span>
      <h3>Mono Filament</h3>
      <p>Precision-extruded monofilament for filtration and industrial screening.</p>
      <div class="item-line"></div>
    </div>
    <div class="woven-item">
      <span class="item-num">04</span>
      <h3>Fibrillated Yarn</h3>
      <p>Network-structured yarn for ropes, nets, and composite reinforcement.</p>
      <div class="item-line"></div>
    </div>
  </div>
</section>

<section class="section-product-hero">
  <div class="product-hero-grid">
    <div class="ph-card">
      <span class="ph-num">Line 1</span>
      <h3 class="ph-name">High Tenacity PP</h3>
      <p class="ph-desc">Engineered for extreme load-bearing applications in geotextiles and heavy lifting.</p>
      <span class="ph-spec">800D - 3000D • 6.5 GPD</span>
    </div>
    <div class="ph-card">
      <span class="ph-num">Line 2</span>
      <h3 class="ph-name">Industrial Tape</h3>
      <p class="ph-desc">Flat profile yarn offering maximum coverage for woven sacks and FIBC bags.</p>
      <span class="ph-spec">400D - 1200D • UV Stabilized</span>
    </div>
    <div class="ph-card">
      <span class="ph-num">Line 3</span>
      <h3 class="ph-name">Custom Blends</h3>
      <p class="ph-desc">Bespoke polymer formulations with anti-microbial or flame-retardant properties.</p>
      <span class="ph-spec">Tailored Specifications</span>
    </div>
  </div>
</section>

<section class="section-quote">
  <blockquote>
    "We don't just manufacture yarn. We engineer the invisible threads that hold modern infrastructure together."
  </blockquote>
</section>

<!-- Bottom Nav placeholder for injection -->
</body>
</html>
"""

with open("public/concepts/13-industrial-hero.html", "w") as f:
    f.write(html_content)
