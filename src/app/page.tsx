import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

const PHONE = "8005916878";
const PHONE_DISPLAY = "+91 80059 16878";
const TEL_HREF = `tel:+91${PHONE}`;
const ADDRESS = "6B, Chandra Vihar Colony, Beawar, Rajasthan";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const polyesterProducts = [
  {
    src: "/3-12-white.jpg",
    alt: "Ne 12/3 recycled white polyester yarn spools",
    name: "Ne 12/3 White",
    note: "3-ply recycled polyester · coarser count",
  },
  {
    src: "/3-12-blue.jpg",
    alt: "Ne 12/3 recycled blue polyester yarn spools",
    name: "Ne 12/3 Blue",
    note: "3-ply recycled polyester · coarser count",
  },
  {
    src: "/3-15-cream-1.jpeg",
    alt: "Ne 15/3 recycled cream polyester yarn spool",
    name: "Ne 15/3 Cream",
    note: "3-ply recycled polyester · finer count",
  },
  {
    src: "/3-15-blue.jpg",
    alt: "Ne 15/3 recycled blue polyester yarn spools",
    name: "Ne 15/3 Blue",
    note: "3-ply recycled polyester · finer count",
  },
];

const bagClosingProducts = [
  {
    src: "/pp-1.jpeg",
    alt: "Cone of polypropylene bag closing thread",
    name: "PP bag closing thread",
    note: "Polypropylene · industrial sack closing",
  },
  {
    src: "/pp-2.jpeg",
    alt: "Polypropylene bag closing thread cone, angled view",
    name: "PP bag closing thread",
    note: "Polypropylene · industrial sack closing",
  },
  {
    src: "/pp-3.jpeg",
    alt: "Polypropylene bag closing thread cone on white surface",
    name: "PP bag closing thread",
    note: "Polypropylene · industrial sack closing",
  },
];

export default function Home() {
  return (
    <main>
      <div className="contact-bar">
        <a href={TEL_HREF} className="contact-bar-phone">
          Call {PHONE_DISPLAY}
        </a>
        <a
          href={MAPS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-bar-address"
        >
          {ADDRESS}
        </a>
      </div>

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
            <a href="#stock">Stock</a>
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
          <h1>3-ply recycled polyester yarn for bag closing</h1>
          <p className="sub">
            We manufacture Ne 12/3 and Ne 15/3 recycled polyester spun yarn, plus
            polypropylene thread for closing woven sacks and industrial bags. From
            Beawar, Rajasthan.
          </p>
          <div className="hero-actions">
            <a href={TEL_HREF} className="btn-primary">
              Call {PHONE_DISPLAY}
            </a>
            <a href="#products" className="btn-ghost">
              See products
            </a>
          </div>
          <p className="hero-address">
            <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
              {ADDRESS}
            </a>
          </p>
        </div>
      </section>

      <section className="section products" id="products">
        <header className="section-head">
          <h2>Recycled polyester spun yarn</h2>
          <p>
            Ring-spun recycled polyester, twisted 3-ply. Sold in English cotton
            count (Ne): <strong>12/3</strong> is the coarser, stronger option for
            heavier sacks; <strong>15/3</strong> is finer for lighter bags and a
            cleaner stitch. Colours include white, cream, snow white, blue, red,
            yellow, and black.
          </p>
        </header>
        <div className="product-grid">
          {polyesterProducts.map((product) => (
            <figure key={product.src} className="product">
              <div className="product-media">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <figcaption>
                <strong>{product.name}</strong>
                <span>{product.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <header className="section-head section-head-follow">
          <h2>Polypropylene bag closing thread</h2>
          <p>
            Plastic PP thread for sealing open-mouth woven polypropylene sacks
            and similar industrial bags on portable or stationary bag closers.
          </p>
        </header>
        <div className="product-grid product-grid-three">
          {bagClosingProducts.map((product) => (
            <figure key={product.src} className="product">
              <div className="product-media">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption>
                <strong>{product.name}</strong>
                <span>{product.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="uses">
          <h3>Where these yarns are used</h3>
          <p>
            Closing and stitching woven PP, jute, paper, and mesh bags for grain,
            feed, seed, fertiliser, cement, chemicals, and other bulk packing. Suited
            to industrial bag-closing machines and high-volume packing lines.
          </p>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-copy">
          <h2>Manufacturer in Beawar</h2>
          <p>
            Giriraaj Textiles started in 2025 in the Ajmer region of Rajasthan. We
            make recycled polyester spun yarn, polypropylene bag closing thread,
            and related industrial yarns for packaging plants and machinery users.
          </p>
          <p>
            Proprietorship under S Agarwal. A small team of up to 10 people,
            GST-registered in 2025. Stock ships from Beawar.
          </p>
        </div>
        <dl className="factsheet">
          <div>
            <dt>Nature of business</dt>
            <dd>Manufacturer</dd>
          </div>
          <div>
            <dt>Legal status</dt>
            <dd>Proprietorship</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={TEL_HREF}>{PHONE_DISPLAY}</a>
            </dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
                6B, Chandra Vihar Colony, Beawar
              </a>
            </dd>
          </div>
          <div>
            <dt>Established</dt>
            <dd>2025</dd>
          </div>
          <div>
            <dt>HSN</dt>
            <dd>5509, 3923</dd>
          </div>
        </dl>
      </section>

      <section className="section stock" id="stock">
        <header className="section-head">
          <h2>Ready stock in Beawar</h2>
          <p>Packed yarn in the warehouse, available for dispatch.</p>
        </header>
        <div className="stock-grid">
          <figure className="stock-shot">
            <Image
              src="/exterior1.webp"
              alt="Warehouse aisle with stacked white and yellow packed yarn stock"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
          <figure className="stock-shot">
            <Image
              src="/exterior2.webp"
              alt="Stacked inventory packages in the Giriraaj Textiles warehouse"
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
          <h2>Send an enquiry</h2>
          <p>
            Prefer to talk first? Call us. Or send count, colour, and monthly
            volume below and we will reply from Beawar.
          </p>
          <ul className="contact-details">
            <li>
              <span>Phone</span>
              <a href={TEL_HREF}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <span>Address</span>
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
                {ADDRESS}
              </a>
            </li>
            <li>
              <span>Catalogue</span>
              <a
                href="https://www.indiamart.com/giriraaj-textiles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IndiaMART listing
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </section>

      <footer>
        <span>Giriraaj Textiles</span>
        <a href={TEL_HREF}>{PHONE_DISPLAY}</a>
        <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
          6B, Chandra Vihar Colony, Beawar
        </a>
      </footer>
    </main>
  );
}
