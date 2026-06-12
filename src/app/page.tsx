'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      gsap.to('.hero-content .overline', { opacity: 1, y: 0, duration: 0.6, delay: 0.3 });
      gsap.from('.hero-content .overline', { y: 15, duration: 0.6, delay: 0.3 });
      gsap.to('.hero-content h1', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
      gsap.from('.hero-content h1', { y: 30, duration: 1, delay: 0.5 });
      gsap.to('.hero-content .sub', { opacity: 1, y: 0, duration: 0.8, delay: 0.8 });
      gsap.from('.hero-content .sub', { y: 20, duration: 0.8, delay: 0.8 });

      gsap.from('.ph-card', {
        opacity: 0, y: 60, stagger: 0.15, duration: 0.8,
        scrollTrigger: { trigger: '.product-hero-grid', start: 'top 75%' }
      });

      gsap.from('.process-abstract-visual', {
        opacity: 0, x: -30, duration: 0.8,
        scrollTrigger: { trigger: '.section-process-abstract', start: 'top 70%' }
      });

      gsap.from('.process-abstract-text', {
        opacity: 0, x: 30, duration: 0.8, delay: 0.15,
        scrollTrigger: { trigger: '.section-process-abstract', start: 'top 70%' }
      });

      gsap.from('.pa-dot', {
        scale: 0, stagger: 0.2, duration: 0.5,
        scrollTrigger: { trigger: '.process-abstract-visual', start: 'top 70%' }
      });

      gsap.from('.section-cta-final h2', {
        opacity: 0, y: 30, duration: 0.8,
        scrollTrigger: { trigger: '.section-cta-final', start: 'top 70%' }
      });

      gsap.from('.app-ph-item', {
        opacity: 0, y: 20, stagger: 0.05, duration: 0.4,
        scrollTrigger: { trigger: '.apps-ph-grid', start: 'top 80%' }
      });

      gsap.from('.tph-card', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.6,
        scrollTrigger: { trigger: '.testimonials-ph-grid', start: 'top 75%' }
      });

      gsap.from('.specs-ph-table tbody tr', {
        opacity: 0, x: -15, stagger: 0.06, duration: 0.4,
        scrollTrigger: { trigger: '.specs-ph-table', start: 'top 80%' }
      });

      gsap.from('.cert-ph-item', {
        opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.4,
        scrollTrigger: { trigger: '.section-cert-ph', start: 'top 85%' }
      });

      gsap.from('.section-infra-ph h2, .section-infra-ph p, .infra-stat', {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: '.section-infra-ph', start: 'top 75%' }
      });

      gsap.from('.section-contact-ph .contact-info, .section-contact-ph form', {
        opacity: 0, y: 30, stagger: 0.2, duration: 0.6,
        scrollTrigger: { trigger: '.section-contact-ph', start: 'top 75%' }
      });

      gsap.utils.toArray<HTMLElement>('.cta-circle').forEach((circle, i) => {
        gsap.to(circle, {
          rotation: i % 2 === 0 ? 360 : -360,
          duration: 15 + i * 5,
          repeat: -1,
          ease: 'none'
        });
      });
    });
    
    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <nav>
  <div className="logo">Giriraj Textiles</div>
  <ul>
    <li><a href="#">Products</a></li>
    <li><a href="#">Process</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<section className="hero">
  <div className="hero-visual">
    <div className="yarn-form">
      <div className="yarn-ring yarn-ring-1"></div>
      <div className="yarn-ring yarn-ring-2"></div>
      <div className="yarn-ring yarn-ring-3"></div>
      <div className="yarn-ring yarn-ring-4"></div>
      <div className="yarn-strand" style={{ 'height': '300px', 'transform': 'translate(-50%, -50%) rotate(0deg)' }}></div>
      <div className="yarn-strand" style={{ 'height': '280px', 'transform': 'translate(-50%, -50%) rotate(30deg)' }}></div>
      <div className="yarn-strand" style={{ 'height': '260px', 'transform': 'translate(-50%, -50%) rotate(60deg)' }}></div>
      <div className="yarn-strand" style={{ 'height': '300px', 'transform': 'translate(-50%, -50%) rotate(90deg)' }}></div>
      <div className="yarn-strand" style={{ 'height': '280px', 'transform': 'translate(-50%, -50%) rotate(120deg)' }}></div>
      <div className="yarn-strand" style={{ 'height': '260px', 'transform': 'translate(-50%, -50%) rotate(150deg)' }}></div>
    </div>
  </div>
  <div className="hero-content">
    <p className="overline">Synthetic Yarn Manufacturing</p>
    <h1>The form of industrial strength</h1>
    <p className="sub">Abstract representations of the yarn structures that power India&apos;s textile industry. Every strand engineered with precision.</p>
  </div>
</section>

<section className="section-product-hero">
  <div className="product-hero-grid">
    <div className="ph-card">
      <div className="ph-card-bg">
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" role="presentation">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C4572A" stopOpacity="0.03"/>
              <stop offset="100%" stopColor="#C4572A" stopOpacity="0.08"/>
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#g1)"/>
          <circle cx="150" cy="180" r="60" fill="none" stroke="#C4572A" strokeWidth="0.5" opacity="0.2"/>
          <circle cx="150" cy="180" r="90" fill="none" stroke="#C4572A" strokeWidth="0.3" opacity="0.1"/>
          <circle cx="150" cy="180" r="120" fill="none" stroke="#C4572A" strokeWidth="0.2" opacity="0.05"/>
          <line x1="150" y1="120" x2="150" y2="240" stroke="#C4572A" strokeWidth="0.5" opacity="0.15"/>
          <line x1="90" y1="180" x2="210" y2="180" stroke="#C4572A" strokeWidth="0.5" opacity="0.15"/>
        </svg>
      </div>
      <span className="ph-num">01</span>
      <h3 className="ph-name">Polypropylene</h3>
      <p className="ph-desc">High-tenacity yarn for woven sacks, geotextiles, industrial fabrics.</p>
      <span className="ph-spec">300D — 1500D</span>
    </div>
    <div className="ph-card">
      <div className="ph-card-bg">
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" role="presentation">
          <defs>
            <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.02"/>
              <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#g2)"/>
          <path d="M50,200 Q150,100 250,200 Q150,300 50,200" fill="none" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.1"/>
          <path d="M80,200 Q150,130 220,200 Q150,270 80,200" fill="none" stroke="#1A1A1A" strokeWidth="0.3" opacity="0.08"/>
          <path d="M110,200 Q150,160 190,200 Q150,240 110,200" fill="none" stroke="#C4572A" strokeWidth="0.5" opacity="0.15"/>
        </svg>
      </div>
      <span className="ph-num">02</span>
      <h3 className="ph-name">Polyester</h3>
      <p className="ph-desc">Fully drawn yarn for technical textiles and sewing applications.</p>
      <span className="ph-spec">75D — 600D</span>
    </div>
    <div className="ph-card">
      <div className="ph-card-bg">
        <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" role="presentation">
          <defs>
            <linearGradient id="g3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C4572A" stopOpacity="0.04"/>
              <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.03"/>
            </linearGradient>
          </defs>
          <rect width="300" height="400" fill="url(#g3)"/>
          <line x1="50" y1="100" x2="250" y2="300" stroke="#C4572A" strokeWidth="0.5" opacity="0.1"/>
          <line x1="250" y1="100" x2="50" y2="300" stroke="#C4572A" strokeWidth="0.5" opacity="0.1"/>
          <line x1="150" y1="80" x2="150" y2="320" stroke="#1A1A1A" strokeWidth="0.3" opacity="0.08"/>
          <line x1="50" y1="200" x2="250" y2="200" stroke="#1A1A1A" strokeWidth="0.3" opacity="0.08"/>
          <circle cx="150" cy="200" r="40" fill="none" stroke="#C4572A" strokeWidth="0.5" opacity="0.12"/>
        </svg>
      </div>
      <span className="ph-num">03</span>
      <h3 className="ph-name">Mono Filament</h3>
      <p className="ph-desc">Precision extruded for filtration, mesh, and screening.</p>
      <span className="ph-spec">Custom Specs</span>
    </div>
  </div>
</section>

<section className="section-process-abstract">
  <div className="process-abstract-visual">
    <div className="pa-line" style={{ top: '20%' }}></div>
    <div className="pa-line" style={{ top: '40%' }}></div>
    <div className="pa-line" style={{ top: '60%' }}></div>
    <div className="pa-line" style={{ top: '80%' }}></div>
    <div className="pa-dot" style={{ top: 'calc(20% - 6px)', left: '20%' }}></div>
    <div className="pa-dot" style={{ top: 'calc(40% - 6px)', left: '50%' }}></div>
    <div className="pa-dot" style={{ top: 'calc(60% - 6px)', left: '75%' }}></div>
    <div className="pa-dot" style={{ top: 'calc(80% - 6px)', left: '35%' }}></div>
    <svg style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true" role="presentation">
      <path d="M80,80 L200,160 L300,240 L140,320" fill="none" stroke="#C4572A" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4"/>
    </svg>
  </div>
  <div className="process-abstract-text">
    <p className="label">Process</p>
    <h2>From polymer to precision</h2>
    <p>Every stage of our manufacturing process is controlled, monitored, and optimized. From raw polymer selection to final dispatch, quality is engineered in — not inspected in.</p>
    <div className="process-steps-mini">
      <div className="step-mini">
        <div className="dot"></div>
        <span>Extract</span>
      </div>
      <div className="step-mini">
        <div className="line"></div>
        <div className="dot"></div>
        <span>Draw</span>
      </div>
      <div className="step-mini">
        <div className="line"></div>
        <div className="dot"></div>
        <span>Test</span>
      </div>
      <div className="step-mini">
        <div className="line"></div>
        <div className="dot"></div>
        <span>Ship</span>
      </div>
    </div>
  </div>
</section>

<section className="section-infra-ph">
  <div className="infra-ph-content">
    <p className="label">Infrastructure</p>
    <h2>State-of-the-art facility</h2>
    <p>Operating out of a newly commissioned, next-generation manufacturing plant in Beawar, Rajasthan. We built Giriraaj Textiles from the ground up to feature the most advanced extrusion and winding technology available today.</p>
    <div className="infra-stats">
      <div className="infra-stat">
        <span className="stat-num">1</span>
        <span className="stat-label">Year of Growth</span>
      </div>
      <div className="infra-stat">
        <span className="stat-num">100%</span>
        <span className="stat-label">Automated Winding</span>
      </div>
      <div className="infra-stat">
        <span className="stat-num">Zero</span>
        <span className="stat-label">Compromise Quality</span>
      </div>
    </div>
  </div>
</section>

<section className="section-apps-ph">
  <div className="apps-ph-header">
    <p className="label">Applications</p>
    <h2>Where our yarn works</h2>
  </div>
  <div className="apps-ph-grid">
    <div className="app-ph-item">
      <h3>Woven Sacks</h3>
      <p>Grain, fertilizer, cement, and chemical packaging</p>
    </div>
    <div className="app-ph-item">
      <h3>Geotextiles</h3>
      <p>Road stabilization and erosion control</p>
    </div>
    <div className="app-ph-item">
      <h3>Ropes & Nets</h3>
      <p>Marine, fishing, and safety applications</p>
    </div>
    <div className="app-ph-item">
      <h3>FIBC Bags</h3>
      <p>Bulk packaging for industrial materials</p>
    </div>
    <div className="app-ph-item">
      <h3>Sewing Thread</h3>
      <p>Heavy-duty stitching for leather and auto</p>
    </div>
    <div className="app-ph-item">
      <h3>Filtration</h3>
      <p>Chemical processing and water treatment</p>
    </div>
    <div className="app-ph-item">
      <h3>Automotive</h3>
      <p>Seat belts, upholstery, and composites</p>
    </div>
    <div className="app-ph-item">
      <h3>Construction</h3>
      <p>Safety nets and reinforcement mesh</p>
    </div>
  </div>
</section>

<section className="section-testimonials-ph">
  <div className="testimonials-ph-header">
    <h2>What our clients say</h2>
  </div>
  <div className="testimonials-ph-grid">
    <div className="tph-card">
      <p className="tph-quote">&quot;Giriraj&apos;s PP yarn runs flawlessly on our high-speed looms. Zero breakage issues in 3 years of continuous use. That speaks volumes.&quot;</p>
      <div className="tph-author">
        <div className="tph-avatar"></div>
        <div>
          <div className="tph-name">Rajesh Patel</div>
          <div className="tph-role">Shreeji Packaging, Ahmedabad</div>
        </div>
      </div>
    </div>
    <div className="tph-card">
      <p className="tph-quote">&quot;Their custom blend development saved us 15% on raw material costs. They&apos;re not just a supplier — they&apos;re a technical partner.&quot;</p>
      <div className="tph-author">
        <div className="tph-avatar"></div>
        <div>
          <div className="tph-name">Amit Shah</div>
          <div className="tph-role">Gujarat Geosynthetics, Surat</div>
        </div>
      </div>
    </div>
    <div className="tph-card">
      <p className="tph-quote">&quot;Batch-to-batch consistency is remarkable. Our rejection rates dropped to near zero after switching to Giriraj polyester yarn.&quot;</p>
      <div className="tph-author">
        <div className="tph-avatar"></div>
        <div>
          <div className="tph-name">Suresh Kumar</div>
          <div className="tph-role">South India Textiles, Coimbatore</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section-specs-ph">
  <div className="specs-ph-header">
    <h2>Technical specifications</h2>
    <a href="#">Download full TDS →</a>
  </div>
  <table className="specs-ph-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Denier Range</th>
        <th>Tenacity</th>
        <th>Elongation</th>
        <th>Applications</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="sp-name">Polypropylene Yarn</td>
        <td><span className="sp-range">300D — 1500D</span></td>
        <td>5.5 — 7.0 g/d</td>
        <td>18 — 24%</td>
        <td>Sacks, geotextiles, FIBC</td>
      </tr>
      <tr>
        <td className="sp-name">Polyester Yarn</td>
        <td><span className="sp-range">75D — 600D</span></td>
        <td>6.0 — 8.5 g/d</td>
        <td>12 — 18%</td>
        <td>Technical textiles, sewing</td>
      </tr>
      <tr>
        <td className="sp-name">Mono Filament</td>
        <td><span className="sp-range">Custom</span></td>
        <td>4.5 — 6.0 g/d</td>
        <td>15 — 25%</td>
        <td>Filtration, mesh, screening</td>
      </tr>
      <tr>
        <td className="sp-name">Fibrillated Yarn</td>
        <td><span className="sp-range">200D — 900D</span></td>
        <td>5.0 — 7.5 g/d</td>
        <td>16 — 22%</td>
        <td>Ropes, nets, composites</td>
      </tr>
      <tr>
        <td className="sp-name">Tape Yarn</td>
        <td><span className="sp-range">500D — 3000D</span></td>
        <td>4.0 — 6.0 g/d</td>
        <td>20 — 30%</td>
        <td>Weaving, packaging</td>
      </tr>
    </tbody>
  </table>
</section>

<section className="section-cert-ph">
  <div className="cert-ph-item">
    <div className="cph-badge">ISO</div>
    <div>
      <div className="cph-name">ISO 9001:2015</div>
      <div className="cph-desc">Quality Management</div>
    </div>
  </div>
  <div className="cert-ph-item">
    <div className="cph-badge">BIS</div>
    <div>
      <div className="cph-name">BIS Certified</div>
      <div className="cph-desc">Indian Standards</div>
    </div>
  </div>
  <div className="cert-ph-item">
    <div className="cph-badge">SGS</div>
    <div>
      <div className="cph-name">SGS Tested</div>
      <div className="cph-desc">International Lab</div>
    </div>
  </div>
</section>

<section className="section-cta-final">
  <div className="cta-visual">
    <div className="cta-circle cta-circle-1"></div>
    <div className="cta-circle cta-circle-2"></div>
    <div className="cta-circle cta-circle-3"></div>
  </div>
  <h2>The strength is in <strong>the strand</strong></h2>
  <a href="#" className="cta-btn">Connect with us</a>
</section>

<section className="section-contact-ph">
  <div className="contact-ph-grid">
    <div className="contact-info">
      <p className="label">Partner with us</p>
      <h2>Ready to upgrade your supply chain?</h2>
      <p>Directly contact our engineering team in Beawar for technical data sheets, MOQs, and custom formulations.</p>
      <div className="contact-methods">
        <p><strong>Email:</strong> sales@giriraajtextiles.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Location:</strong> Beawar, Rajasthan, India</p>
      </div>
    </div>
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Company Name" required />
        <input type="email" placeholder="Work Email" required />
        <select required defaultValue="">
          <option value="" disabled>Select Yarn Type</option>
          <option value="pp">Polypropylene (PP) Yarn</option>
          <option value="pet">Polyester (PET) Yarn</option>
          <option value="mono">Mono Filament</option>
          <option value="fibrillated">Fibrillated / Tape</option>
        </select>
        <textarea placeholder="Tell us about your requirements (Denier, application, monthly volume)..." rows={4}></textarea>
        <button type="submit" className="submit-btn">Request Quote</button>
      </form>
    </div>
  </div>
</section>

<footer>
  <span>Giriraaj Textiles Pvt. Ltd.</span>
  <span>Beawar, Rajasthan, India</span>
</footer>

<div className="concept-tag">Concept 12 — Product as Hero</div>
    </main>
  );
}
