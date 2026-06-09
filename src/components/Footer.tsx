export default function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="copper-divider max-w-[200px] mx-auto mb-8" />
      <div className="container-site">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; 2026 Giriraaj Textiles. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#products" className="text-xs text-muted hover:text-ink transition-colors no-underline">
              Products
            </a>
            <a href="#story" className="text-xs text-muted hover:text-ink transition-colors no-underline">
              Process
            </a>
            <a href="#why" className="text-xs text-muted hover:text-ink transition-colors no-underline">
              Why Us
            </a>
            <a href="#contact" className="text-xs text-muted hover:text-ink transition-colors no-underline">
              Contact
            </a>
            <a href="#" className="text-xs text-muted hover:text-ink transition-colors no-underline">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
