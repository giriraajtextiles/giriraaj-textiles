import os
import re

concepts_dir = "concepts"
out_base = "src/app/concepts"

files = [
    "06-national-infrastructure.html",
    "08-warehouse-modernism.html",
    "11-monolithic-typography.html",
    "12-product-as-hero.html"
]

for f in files:
    path = os.path.join(concepts_dir, f)
    with open(path, "r") as file:
        html = file.read()
    
    style_match = re.search(r'<style>([\s\S]*?)<\/style>', html)
    style_content = style_match.group(1) if style_match else ""
    
    body_match = re.search(r'<body>([\s\S]*?)<\/body>', html)
    body_content = body_match.group(1) if body_match else ""
    
    script_matches = re.findall(r'<script>([\s\S]*?)<\/script>', body_content)
    inline_scripts = "\n".join(script_matches)
    
    # remove scripts from body
    body_content = re.sub(r'<script[\s\S]*?<\/script>', '', body_content)
    
    # replace backticks and dollars in JS so we can put it in a JS template literal
    style_content = style_content.replace('`', '\\`').replace('$', '\\$')
    body_content = body_content.replace('`', '\\`').replace('$', '\\$')
    
    page_code = f"""\"use client\";
import {{ useEffect }} from 'react';
import Script from 'next/script';

export default function Page() {{
  useEffect(() => {{
    const initGsap = () => {{
      if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {{
        {inline_scripts}
      }} else {{
        setTimeout(initGsap, 100);
      }}
    }};
    initGsap();
  }}, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{{{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Work+Sans:wght@300;400;500;600&display=swap');
        {style_content}
      `}}}} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      
      <div className="concept-container" dangerouslySetInnerHTML={{{{ __html: `{body_content}` }}}} />
    </>
  );
}}
"""
    
    route_name = re.sub(r'^\d+-|\.html$', '', f)
    out_dir = os.path.join(out_base, route_name)
    os.makedirs(out_dir, exist_ok=True)
    
    with open(os.path.join(out_dir, "page.tsx"), "w") as out:
        out.write(page_code)
        
    print(f"Ported {f} to {route_name}")
