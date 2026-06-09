import os
import re

public_concepts_dir = "public/concepts"

files = [
    "02-textile-architecture.html",
    "04-manufacturing-poetry.html",
    "06-national-infrastructure.html",
    "08-warehouse-modernism.html",
    "11-monolithic-typography.html",
    "12-product-as-hero.html"
]

responsive_css = """
/* INJECTED MOBILE RESPONSIVE CSS */
@media (max-width: 768px) {
  body, html {
    overflow-x: hidden;
    width: 100%;
  }
  
  h1 { font-size: 3rem !important; line-height: 1.1 !important; }
  h2 { font-size: 2.2rem !important; line-height: 1.2 !important; }
  h3 { font-size: 1.4rem !important; }
  p { font-size: 1rem !important; }
  
  .hero-title, .hero h1 { font-size: 12vw !important; }
  
  section, .hero, .section-process, .section-industries, header, footer { 
    padding: 40px 20px !important; 
    height: auto !important;
    min-height: auto !important;
  }
  
  [class*="-grid"], [class*="-row"], .hero, .hero-content, .pm-row, .materials-list {
    display: flex !important;
    flex-direction: column !important;
    gap: 32px !important;
    width: 100% !important;
  }
  
  .concept-bottom-nav {
    flex-direction: row !important;
    width: 90% !important;
    padding: 8px !important;
    gap: 4px !important;
    bottom: 16px !important;
  }
  
  .concept-bottom-nav a {
    width: 28px !important;
    height: 28px !important;
    font-size: 12px !important;
  }
  .concept-bottom-nav .nav-home {
    width: auto !important;
    padding: 0 10px !important;
  }
  
  img, svg, .hero-visual, [class*="-visual"] {
    max-width: 100% !important;
    height: auto !important;
  }
  
  /* Specific hide overrides for purely desktop background elements that break mobile */
  .weave-grid, .poem-threads, .hero-grid-lines {
    opacity: 0.2 !important;
  }
  
  [class*="-item"], [class*="-card"] {
    width: 100% !important;
    margin: 0 !important;
  }
}
"""

for f_name in files:
    path = os.path.join(public_concepts_dir, f_name)
    with open(path, "r") as file:
        content = file.read()
    
    # 1. Inject Viewport Meta if missing
    if '<meta name="viewport"' not in content:
        content = content.replace('<head>', '<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">')
    
    # 2. Inject CSS before </style>
    if "/* INJECTED MOBILE RESPONSIVE CSS */" not in content:
        content = content.replace('</style>', responsive_css + '\n</style>')
        
    with open(path, "w") as file:
        file.write(content)
        
    print(f"Injected responsive CSS into {f_name}")
