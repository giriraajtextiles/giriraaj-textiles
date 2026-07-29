import Image from "next/image";
import {
  polyesterCounts,
  polyesterVariants,
  polypropylenePhotos,
} from "@/lib/products";

const PHONE = "8005916878";
const PHONE_DISPLAY = "+91 80059 16878";
const TEL_HREF = `tel:+91${PHONE}`;
const ADDRESS = "6B, Chandra Vihar Colony, Beawar, Rajasthan";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function waHref(message: string) {
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
}

const WA_GENERAL = waHref(
  "Hello, I want to enquire about yarn from Giriraaj Textiles.\nProduct:\nCount:\nColour:\nMonthly volume:",
);
const WA_POLYESTER = waHref(
  "Hello, I want to enquire about recycled polyester yarn (3-ply, counts 10/12/15).\nCount:\nColour:\nMonthly volume:",
);
const WA_PP = waHref(
  "Hello, I want to enquire about polypropylene (PP) thread.\nDetails:",
);

export default function Home() {
  return (
    <main>
      <nav>
        <a href="#top" className="logo">
          Giriraaj Textiles
        </a>
        <ul>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Enquire</a>
          </li>
          <li>
            <a href={TEL_HREF} className="nav-call">
              {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero" id="top">
        <Image
          src="/3-12-white.jpg"
          alt="Spools of recycled white polyester yarn"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="brand">Giriraaj Textiles</p>
          <h1>Synthetic yarn for industrial bag closing</h1>
          <p className="sub">
            Recycled polyester yarn and polypropylene thread, manufactured in
            Beawar, Rajasthan.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn-primary">
              Browse products
            </a>
            <a
              href={WA_GENERAL}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section catalogue" id="products">
        <header className="catalogue-intro">
          <h2>Products</h2>
          <p>
            Two lines. Pick a product, check the variants, then enquire on
            WhatsApp. We reply within 12 hours.
          </p>
        </header>

        <article className="product-line" id="polyester">
          <div className="product-line-copy">
            <h3>Recycled polyester yarn</h3>
            <p>
              3-ply synthetic yarn for closing HDP and woven bags on industrial
              bag-closing machines.
            </p>
            <dl className="spec-list">
              <div>
                <dt>Ply</dt>
                <dd>3-ply</dd>
              </div>
              <div>
                <dt>Count</dt>
                <dd>{polyesterCounts.join(", ")}</dd>
              </div>
              <div>
                <dt>MOQ</dt>
                <dd>1,000 cones</dd>
              </div>
            </dl>
            <a
              href={WA_POLYESTER}
              className="line-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
          <div className="variant-gallery" aria-label="Polyester yarn colours">
            {polyesterVariants.map((variant) => (
              <figure key={variant.src} className="variant">
                <div className="variant-media">
                  <Image
                    src={variant.src}
                    alt={variant.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 22vw"
                  />
                </div>
                <figcaption>
                  <strong>{variant.label}</strong>
                  <span>{variant.count} count</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </article>

        <article className="product-line product-line-pp" id="pp">
          <div className="product-line-copy">
            <h3>Polypropylene thread</h3>
            <p>
              PP thread for sealing open-mouth woven sacks and industrial bags.
              More specifications are available on call.
            </p>
            <a
              href={WA_PP}
              className="line-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
          <div className="variant-gallery" aria-label="Polypropylene thread">
            {polypropylenePhotos.map((photo) => (
              <figure key={photo.src} className="variant">
                <div className="variant-media">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 22vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </article>
      </section>

      <section className="section about" id="about">
        <div className="about-copy">
          <h2>From Beawar</h2>
          <p>
            Giriraaj Textiles started in 2025 in the Ajmer region of Rajasthan.
            Proprietorship under S Agarwal. A small team, GST-registered, stock
            ships from Beawar.
          </p>
        </div>
        <div className="stock-grid" aria-label="Warehouse stock">
          <figure className="stock-shot">
            <Image
              src="/exterior1.webp"
              alt="Warehouse aisle with stacked packed yarn stock"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
          <figure className="stock-shot">
            <Image
              src="/exterior2.webp"
              alt="Stacked inventory packages in the warehouse"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </figure>
          <figure className="stock-shot">
            <Image
              src="/exterior3.webp"
              alt="Packed yarn stock ready for dispatch"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </figure>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-intro">
          <h2>Enquire on WhatsApp</h2>
          <p>
            Send count, colour, and monthly volume. We reply within 12 hours.
          </p>
          <div className="contact-actions">
            <a
              href={WA_GENERAL}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp
            </a>
            <a href={TEL_HREF} className="contact-phone">
              Or call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>Giriraaj Textiles</span>
        <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
          {ADDRESS}
        </a>
      </footer>
    </main>
  );
}
