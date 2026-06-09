// @ts-nocheck
"use client";
import { useEffect } from 'react';
import Script from 'next/script';

export default function Page() {
  useEffect(() => {
    const initGsap = () => {
      if (typeof (window as any).gsap !== 'undefined' && typeof (window as any).ScrollTrigger !== 'undefined') {
        
gsap.registerPlugin(ScrollTrigger);

gsap.to('.line-inner', {
  y: 0,
  duration: 1.2,
  stagger: 0.15,
  delay: 0.3,
  ease: 'power4.out'
});

gsap.to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, delay: 1.2 });
gsap.from('.hero-sub', { y: 20, duration: 0.8, delay: 1.2 });

gsap.from('.section-massive h2', {
  opacity: 0, y: 50, duration: 1,
  scrollTrigger: { trigger: '.section-massive', start: 'top 70%' }
});

gsap.from('.pm-row', {
  opacity: 0, x: -30, stagger: 0.08, duration: 0.5,
  scrollTrigger: { trigger: '.products-mono-list', start: 'top 75%' }
});

gsap.from('.section-statement h2', {
  opacity: 0, scale: 0.95, duration: 1,
  scrollTrigger: { trigger: '.section-statement', start: 'top 70%' }
});

gsap.from('.stat-mono', {
  opacity: 0, y: 30, stagger: 0.1, duration: 0.5,
  scrollTrigger: { trigger: '.section-stats-mono', start: 'top 80%' }
});

gsap.from('.section-contact h2', {
  opacity: 0, y: 30, duration: 0.8,
  scrollTrigger: { trigger: '.section-contact', start: 'top 70%' }
});

gsap.from('.ind-m-item', {
  opacity: 0, y: 20, stagger: 0.05, duration: 0.4,
  scrollTrigger: { trigger: '.industries-m-grid', start: 'top 80%' }
});

gsap.from('.blog-m-card', {
  opacity: 0, y: 30, stagger: 0.1, duration: 0.5,
  scrollTrigger: { trigger: '.blog-m-grid', start: 'top 75%' }
});

gsap.from('.cert-m-item', {
  opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.4,
  scrollTrigger: { trigger: '.section-cert-m', start: 'top 85%' }
});

gsap.from('.faq-m-item', {
  opacity: 0, y: 15, stagger: 0.06, duration: 0.4,
  scrollTrigger: { trigger: '.faq-m-list', start: 'top 80%' }
});

      } else {
        setTimeout(initGsap, 100);
      }
    };
    initGsap();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Work+Sans:wght@300;400;500;600&display=swap');
        
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --white: #FFFFFF;
  --black: #0A0A0A;
  --electric: #2945FF;
  --grey: #999999;
  --light: #F0F0F0;
  --border: rgba(10,10,10,0.04);
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Outfit', sans-serif;
  background: var(--white);
  color: var(--black);
  overflow-x: hidden;
}

nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: difference;
}

nav .logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 0.15em;
  color: white;
}

nav ul {
  display: flex;
  gap: 32px;
  list-style: none;
}

nav a {
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: white;
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.3s;
}

nav a:hover { opacity: 1; }

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  position: relative;
}

.hero h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(100px, 22vw, 360px);
  line-height: 0.8;
  letter-spacing: -0.02em;
  color: var(--black);
  position: relative;
}

.hero h1 .line {
  display: block;
  overflow: hidden;
}

.hero h1 .line-inner {
  display: block;
  transform: translateY(110%);
}

.hero h1 .outline-text {
  -webkit-text-stroke: 2px var(--black);
  color: transparent;
}

.hero h1 .blue {
  color: var(--electric);
}

.hero-sub {
  position: absolute;
  bottom: 60px;
  left: 40px;
  right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  opacity: 0;
}

.hero-sub .left {
  font-weight: 300;
  font-size: 14px;
  color: var(--grey);
  max-width: 360px;
  line-height: 1.6;
}

.hero-sub .right {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 16px;
  letter-spacing: 0.15em;
  color: var(--grey);
}

.section-massive {
  padding: 0 40px;
  min-height: 60vh;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border);
}

.section-massive h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(60px, 14vw, 220px);
  line-height: 0.85;
  letter-spacing: -0.01em;
}

.section-massive h2 .thin {
  font-family: 'Outfit', sans-serif;
  font-weight: 200;
  font-style: normal;
}

.section-massive h2 .blue { color: var(--electric); }

.section-products {
  padding: 120px 40px;
  border-top: 1px solid var(--border);
}

.products-mono-list {
  list-style: none;
}

.pm-row {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 24px;
  padding: 40px 0;
  border-bottom: 1px solid var(--border);
  align-items: baseline;
  cursor: default;
  transition: all 0.3s ease;
}

.pm-row:first-child {
  border-top: 1px solid var(--border);
}

.pm-row:hover {
  padding-left: 24px;
}

.pm-row:hover .pm-name {
  color: var(--electric);
}

.pm-row .pm-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  color: var(--light);
  letter-spacing: 0.05em;
}

.pm-row .pm-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(32px, 5vw, 64px);
  letter-spacing: 0.02em;
  transition: color 0.3s;
}

.pm-row .pm-spec {
  font-weight: 300;
  font-size: 12px;
  color: var(--grey);
  letter-spacing: 0.05em;
}

.section-statement {
  padding: 200px 40px;
  border-top: 1px solid var(--border);
  text-align: center;
}

.section-statement h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(48px, 10vw, 160px);
  line-height: 0.9;
  letter-spacing: -0.02em;
}

.section-statement h2 .blue { color: var(--electric); }

.section-statement .sub {
  font-weight: 200;
  font-size: 14px;
  color: var(--grey);
  margin-top: 24px;
  letter-spacing: 0.05em;
}

.section-stats-mono {
  padding: 80px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--border);
}

.stat-mono {
  padding: 40px;
  border-right: 1px solid var(--border);
  text-align: center;
}

.stat-mono:last-child { border-right: none; }

.stat-mono .big {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(48px, 7vw, 96px);
  line-height: 1;
  letter-spacing: 0.02em;
}

.stat-mono .big .blue { color: var(--electric); }

.stat-mono .desc {
  font-weight: 300;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--grey);
  margin-top: 8px;
}

.section-industries-m {
  padding: 120px 40px;
  border-top: 1px solid var(--border);
}

.section-industries-m h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(48px, 8vw, 120px);
  line-height: 0.9;
  letter-spacing: -0.01em;
  margin-bottom: 48px;
}

.section-industries-m h2 .blue { color: var(--electric); }

.industries-m-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

.ind-m-item {
  padding: 32px 24px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.ind-m-item:hover {
  background: var(--black);
  border-color: var(--black);
}

.ind-m-item:hover h3 { color: white; }
.ind-m-item:hover p { color: rgba(255,255,255,0.4); }

.ind-m-item h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
  transition: color 0.3s;
}

.ind-m-item p {
  font-weight: 300;
  font-size: 11px;
  color: var(--grey);
  line-height: 1.5;
  transition: color 0.3s;
}

.section-blog-m {
  padding: 120px 40px;
  border-top: 1px solid var(--border);
}

.blog-m-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 48px;
}

.blog-m-header h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(36px, 5vw, 72px);
  letter-spacing: 0.02em;
}

.blog-m-header a {
  font-weight: 300;
  font-size: 12px;
  color: var(--electric);
  text-decoration: none;
  letter-spacing: 0.05em;
}

.blog-m-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-m-card {
  border: 1px solid var(--border);
  padding: 32px;
  transition: all 0.3s ease;
}

.blog-m-card:hover {
  border-color: var(--electric);
}

.blog-m-card .bm-cat {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 12px;
  letter-spacing: 0.15em;
  color: var(--electric);
  margin-bottom: 12px;
}

.blog-m-card h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.03em;
  margin-bottom: 8px;
}

.blog-m-card p {
  font-weight: 300;
  font-size: 12px;
  line-height: 1.6;
  color: var(--grey);
}

.blog-m-card .bm-date {
  font-weight: 300;
  font-size: 10px;
  color: var(--grey);
  margin-top: 16px;
  letter-spacing: 0.05em;
}

.section-cert-m {
  padding: 80px 40px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: center;
  gap: 48px;
}

.cert-m-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cert-m-item .cm-badge {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  color: var(--electric);
  letter-spacing: 0.05em;
}

.cert-m-item .cm-name {
  font-weight: 500;
  font-size: 13px;
}

.cert-m-item .cm-desc {
  font-weight: 300;
  font-size: 10px;
  color: var(--grey);
}

.section-faq-m {
  padding: 120px 40px;
  border-top: 1px solid var(--border);
}

.section-faq-m h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(36px, 5vw, 72px);
  letter-spacing: 0.02em;
  margin-bottom: 48px;
  text-align: center;
}

.faq-m-list {
  max-width: 700px;
  margin: 0 auto;
}

.faq-m-item {
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.faq-m-item:first-child {
  border-top: 1px solid var(--border);
}

.faq-m-item .fm-q {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.faq-m-item .fm-a {
  font-weight: 300;
  font-size: 13px;
  line-height: 1.7;
  color: var(--grey);
}

.section-contact {
  padding: 200px 40px;
  border-top: 1px solid var(--border);
  text-align: center;
}

.section-contact h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(36px, 6vw, 80px);
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}

.contact-link {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(24px, 4vw, 48px);
  color: var(--electric);
  text-decoration: none;
  letter-spacing: 0.05em;
  position: relative;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--electric);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

.contact-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

footer {
  padding: 24px 40px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
}

footer span {
  font-weight: 300;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--grey);
  text-transform: uppercase;
}

.concept-tag {
  position: fixed;
  bottom: 24px;
  right: 24px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--grey);
  z-index: 100;
  opacity: 0.4;
}

      `}} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      
      <div className="concept-container" dangerouslySetInnerHTML={{ __html: `

<nav>
  <div class="logo">Giriraj</div>
  <ul>
    <li><a href="#">Yarn</a></li>
    <li><a href="#">Info</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<section class="hero">
  <h1>
    <span class="line"><span class="line-inner">GIRIRAJ</span></span>
    <span class="line"><span class="line-inner outline-text">TEXTILES</span></span>
  </h1>
  <div class="hero-sub">
    <span class="left">Industrial synthetic yarn manufacturer. Polypropylene, polyester, and custom blends. Rajkot, Gujarat. Since 1992.</span>
    <span class="right">Est. 1992 — India</span>
  </div>
</section>

<section class="section-massive">
  <h2><span class="thin">We make</span> YARN <span class="blue">that builds India</span></h2>
</section>

<section class="section-products">
  <ul class="products-mono-list">
    <li class="pm-row">
      <span class="pm-num">01</span>
      <span class="pm-name">POLYPROPYLENE</span>
      <span class="pm-spec">300D — 1500D</span>
    </li>
    <li class="pm-row">
      <span class="pm-num">02</span>
      <span class="pm-name">POLYESTER</span>
      <span class="pm-spec">75D — 600D</span>
    </li>
    <li class="pm-row">
      <span class="pm-num">03</span>
      <span class="pm-name">MONO FILAMENT</span>
      <span class="pm-spec">Custom</span>
    </li>
    <li class="pm-row">
      <span class="pm-num">04</span>
      <span class="pm-name">FIBRILLATED</span>
      <span class="pm-spec">200D — 900D</span>
    </li>
    <li class="pm-row">
      <span class="pm-num">05</span>
      <span class="pm-name">TAPE YARN</span>
      <span class="pm-spec">500D — 3000D</span>
    </li>
    <li class="pm-row">
      <span class="pm-num">06</span>
      <span class="pm-name">CUSTOM BLENDS</span>
      <span class="pm-spec">Made to Order</span>
    </li>
  </ul>
</section>

<section class="section-statement">
  <h2>30 YEARS.<br><span class="blue">12,000 TONS.</span><br>ZERO COMPROMISE.</h2>
  <p class="sub">Polypropylene · Polyester · Industrial Yarn</p>
</section>

<section class="section-stats-mono">
  <div class="stat-mono">
    <div class="big">30+</div>
    <div class="desc">Years</div>
  </div>
  <div class="stat-mono">
    <div class="big">12<span class="blue">K</span></div>
    <div class="desc">Tons/Year</div>
  </div>
  <div class="stat-mono">
    <div class="big">200+</div>
    <div class="desc">Clients</div>
  </div>
  <div class="stat-mono">
    <div class="big">18</div>
    <div class="desc">States</div>
  </div>
</section>

<section class="section-industries-m">
  <h2>INDUSTRIES <span class="blue">WE SERVE</span></h2>
  <div class="industries-m-grid">
    <div class="ind-m-item">
      <h3>GEOTEXTILES</h3>
      <p>Road construction, soil stabilization, erosion control</p>
    </div>
    <div class="ind-m-item">
      <h3>PACKAGING</h3>
      <p>Woven sacks, FIBC bags, flexible packaging</p>
    </div>
    <div class="ind-m-item">
      <h3>AUTOMOTIVE</h3>
      <p>Seat belts, upholstery, composite materials</p>
    </div>
    <div class="ind-m-item">
      <h3>AGRICULTURE</h3>
      <p>Crop covers, shade nets, baling twine</p>
    </div>
    <div class="ind-m-item">
      <h3>MARINE</h3>
      <p>Mooring ropes, fishing nets, marine cordage</p>
    </div>
    <div class="ind-m-item">
      <h3>CONSTRUCTION</h3>
      <p>Safety nets, scaffolding wrap, reinforcement</p>
    </div>
    <div class="ind-m-item">
      <h3>FILTRATION</h3>
      <p>Industrial filter fabrics, mining, wastewater</p>
    </div>
    <div class="ind-m-item">
      <h3>HOME TEXTILES</h3>
      <p>Carpet backing, mattress fabrics, webbings</p>
    </div>
  </div>
</section>

<section class="section-blog-m">
  <div class="blog-m-header">
    <h2>INSIGHTS</h2>
    <a href="#">All articles →</a>
  </div>
  <div class="blog-m-grid">
    <div class="blog-m-card">
      <p class="bm-cat">TECHNICAL</p>
      <h3>UNDERSTANDING DENIER IN INDUSTRIAL YARN</h3>
      <p>How denier measurement affects tensile strength, flexibility, and end-use performance.</p>
      <p class="bm-date">March 2024</p>
    </div>
    <div class="blog-m-card">
      <p class="bm-cat">INDUSTRY</p>
      <h3>GEOTEXTILES IN INDIA'S HIGHWAY EXPANSION</h3>
      <p>The role of synthetic yarn in the ₹2 lakh crore national infrastructure program.</p>
      <p class="bm-date">February 2024</p>
    </div>
    <div class="blog-m-card">
      <p class="bm-cat">SUSTAINABILITY</p>
      <h3>RECYCLED POLYMERS: THE NEXT FRONTIER</h3>
      <p>How recycled PET and PP are creating new markets for industrial yarn manufacturers.</p>
      <p class="bm-date">January 2024</p>
    </div>
  </div>
</section>

<section class="section-cert-m">
  <div class="cert-m-item">
    <span class="cm-badge">ISO</span>
    <div>
      <div class="cm-name">ISO 9001:2015</div>
      <div class="cm-desc">Quality Certified</div>
    </div>
  </div>
  <div class="cert-m-item">
    <span class="cm-badge">BIS</span>
    <div>
      <div class="cm-name">BIS Standards</div>
      <div class="cm-desc">Indian Compliance</div>
    </div>
  </div>
  <div class="cert-m-item">
    <span class="cm-badge">SGS</span>
    <div>
      <div class="cm-name">SGS Verified</div>
      <div class="cm-desc">International Testing</div>
    </div>
  </div>
</section>

<section class="section-faq-m">
  <h2>QUESTIONS</h2>
  <div class="faq-m-list">
    <div class="faq-m-item">
      <p class="fm-q">WHAT IS YOUR MINIMUM ORDER QUANTITY?</p>
      <p class="fm-a">Standard MOQ is 500 kg per denomination. Custom blends may require higher minimums depending on production setup.</p>
    </div>
    <div class="faq-m-item">
      <p class="fm-q">WHAT IS YOUR TYPICAL LEAD TIME?</p>
      <p class="fm-a">Standard products dispatch within 72 hours. Custom formulations and bulk orders require 5–7 working days.</p>
    </div>
    <div class="faq-m-item">
      <p class="fm-q">DO YOU PROVIDE TECHNICAL DATA SHEETS?</p>
      <p class="fm-a">Yes. Every product has a comprehensive TDS. Every shipment includes a batch test certificate with tenacity, elongation, and shrinkage data.</p>
    </div>
    <div class="faq-m-item">
      <p class="fm-q">CAN YOU DEVELOP CUSTOM FORMULATIONS?</p>
      <p class="fm-a">Our R&D team develops bespoke yarn specifications — from denier and tenacity to color masterbatch integration. Sample cones available within 5 days.</p>
    </div>
    <div class="faq-m-item">
      <p class="fm-q">WHICH STATES DO YOU SUPPLY TO?</p>
      <p class="fm-a">18 states across India including Gujarat, Maharashtra, Rajasthan, Tamil Nadu, Karnataka, Punjab, West Bengal, and Uttar Pradesh.</p>
    </div>
  </div>
</section>

<section class="section-contact">
  <h2>TALK TO US</h2>
  <a href="mailto:info@girirajtextiles.com" class="contact-link">info@girirajtextiles.com</a>
</section>

<footer>
  <span>Giriraj Textiles Pvt. Ltd.</span>
  <span>Rajkot, Gujarat, India</span>
</footer>

<div class="concept-tag">Concept 11 — Monolithic Typography</div>




` }} />
    </>
  );
}
