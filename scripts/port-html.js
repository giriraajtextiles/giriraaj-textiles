const fs = require('fs');
const path = require('path');

const fileNames = [
  '02-textile-architecture',
  '04-manufacturing-poetry'
];

fileNames.forEach(name => {
  const htmlPath = path.join(__dirname, '..', 'concepts', name + '.html');
  if (!fs.existsSync(htmlPath)) return;

  const html = fs.readFileSync(htmlPath, 'utf8');

  // Extract Style
  const styleMatch = html.match(/<style>([\\s\\S]*?)<\\/style>/);
  const styleContent = styleMatch ? styleMatch[1] : '';

  // Extract Body
  const bodyMatch = html.match(/<body>([\\s\\S]*?)<\\/body>/);
  let bodyContent = bodyMatch ? bodyMatch[1] : '';

  // Extract inline scripts
  const scriptRegex = /<script>([\\s\\S]*?)<\\/script>/g;
  let match;
  let inlineScripts = '';
  while ((match = scriptRegex.exec(bodyContent)) !== null) {
    inlineScripts += match[1] + '\\n';
  }

  // Remove all scripts from body
  bodyContent = bodyContent.replace(/<script[\\s\\S]*?<\\/script>/g, '');

  const pageComponent = '"use client";\\n' +
'import { useEffect } from "react";\\n' +
'import Script from "next/script";\\n' +
'\\n' +
'export default function Page() {\\n' +
'  useEffect(() => {\\n' +
'    const initGsap = () => {\\n' +
'      if (typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined") {\\n' +
         inlineScripts + '\\n' +
'      } else {\\n' +
'        setTimeout(initGsap, 100);\\n' +
'      }\\n' +
'    };\\n' +
'    initGsap();\\n' +
'  }, []);\\n' +
'\\n' +
'  return (\\n' +
'    <>\\n' +
'      <style dangerouslySetInnerHTML={{ __html: `\\n' +
'        @import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap");\\n' +
'        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Work+Sans:wght@300;400;500;600&display=swap");\\n' +
         styleContent.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$') + '\\n' +
'      `}} />\\n' +
'      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />\\n' +
'      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />\\n' +
'      \\n' +
'      <div className="concept-container" dangerouslySetInnerHTML={{ __html: `\\n' +
         bodyContent.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$') + '\\n' +
'      ` }} />\\n' +
'    </>\\n' +
'  );\\n' +
'}\\n';

  const routeName = name.replace(/^\\d+-/, '');
  const outDir = path.join(__dirname, '..', 'src', 'app', 'concepts', routeName);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.tsx'), pageComponent.trim());
  console.log("Successfully ported " + name);
});
