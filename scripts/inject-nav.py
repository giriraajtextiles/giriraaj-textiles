import os
import re

public_concepts_dir = "public/concepts"

files = [
    ("02-textile-architecture.html", "02"),
    ("04-manufacturing-poetry.html", "04"),
    ("06-national-infrastructure.html", "06"),
    ("08-warehouse-modernism.html", "08"),
    ("11-monolithic-typography.html", "11"),
    ("12-product-as-hero.html", "12")
]

# Generate the navigation HTML
nav_links = ""
for i, (f_name, label) in enumerate(files):
    # Highlight the current page by using a different style (we'll replace a placeholder for the active one)
    nav_links += f'<a href="/concepts/{f_name}" class="nav-btn nav-btn-{label}">{i+1}</a>'

nav_html_template = f"""
<!-- INJECTED CONCEPT NAV -->
<style>
  .concept-bottom-nav {{
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 8px 16px;
    border-radius: 40px;
    display: flex;
    gap: 8px;
    align-items: center;
    z-index: 99999;
    font-family: system-ui, -apple-system, sans-serif;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }}
  .concept-bottom-nav a {{
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
  }}
  .concept-bottom-nav a:hover {{
    background: rgba(255,255,255,0.2);
  }}
  .concept-bottom-nav a.active {{
    background: white;
    color: black;
  }}
  .concept-bottom-nav .nav-home {{
    padding: 0 12px;
    border-radius: 20px;
    width: auto;
    margin-right: 8px;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }}
</style>
<div class="concept-bottom-nav">
  <a href="/" class="nav-home">Home</a>
  {nav_links}
</div>
<!-- END INJECTED CONCEPT NAV -->
</body>
"""

for f_name, label in files:
    path = os.path.join(public_concepts_dir, f_name)
    with open(path, "r") as file:
        content = file.read()
        
    # If we already injected it, let's remove the old one
    content = re.sub(r'<!-- INJECTED CONCEPT NAV -->.*?<!-- END INJECTED CONCEPT NAV -->\n?</body>', '</body>', content, flags=re.DOTALL)
    
    # Customize the template for this specific file (mark active)
    custom_nav = nav_html_template.replace(f'nav-btn-{label}">', f'nav-btn-{label} active">')
    
    # Inject just before </body>
    new_content = content.replace("</body>", custom_nav)
    
    with open(path, "w") as file:
        file.write(new_content)
    print(f"Injected bottom nav into {f_name}")
