"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "Synthetic Sewing Thread",
    description: "High-tenacity polyester thread engineered for industrial stitching. Perfect for HDPE cement bags and fertilizer sacks.",
    specs: ["48N Tensile Strength", "15-Count", "3-Ply Structure"],
    moq: "5 Tons",
    delivery: "2-3 Weeks",
    iconColor: "oklch(0.5 0.2 250)"
  },
  {
    title: "PP Multifilament Yarn",
    description: "Versatile twisted yarn designed for maximum moisture resistance and durability in challenging environments.",
    specs: ["UV Stabilized", "Moisture Proof", "High Denier Range"],
    moq: "3 Tons",
    delivery: "1-2 Weeks",
    iconColor: "oklch(0.6 0.2 250)"
  },
  {
    title: "Custom Formulations",
    description: "Tailored yarn manufacturing to match your specific machinery, material, and production volume requirements.",
    specs: ["Custom Denier", "Color Matching", "Specific Coatings"],
    moq: "10 Tons",
    delivery: "4-6 Weeks",
    iconColor: "oklch(0.7 0.15 250)"
  },
];

function ProductGraphic({ color }: { color: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".prod-shape", {
        rotation: 360,
        transformOrigin: "center",
        duration: 20,
        repeat: -1,
        ease: "linear"
      });
      gsap.to(".prod-dot", {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }, svgRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="h-40 w-full bg-muted/30 flex items-center justify-center overflow-hidden relative">
      <svg ref={svgRef} viewBox="0 0 200 100" className="w-full h-full object-cover opacity-80">
        <circle className="prod-shape" cx="100" cy="50" r="40" fill="none" stroke={color} strokeWidth="4" strokeDasharray="10 10" />
        <circle className="prod-dot" cx="80" cy="50" r="6" fill={color} />
        <circle className="prod-dot" cx="100" cy="50" r="6" fill={color} />
        <circle className="prod-dot" cx="120" cy="50" r="6" fill={color} />
      </svg>
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="section-padding relative bg-background border-t border-border">
      <div className="container-site">
        <div ref={headingRef} className="mb-16 text-center">
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight mb-6 text-foreground text-balance">
            Industrial-grade formulations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            Engineered for specific B2B applications. Consistent tensile strength across every spool.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.title} className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-500 flex flex-col group">
              <ProductGraphic color={product.iconColor} />
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-medium flex-1">
                  {product.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold tracking-wide"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">MOQ</p>
                      <p className="text-sm font-bold text-foreground">{product.moq}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Lead Time</p>
                      <p className="text-sm font-bold text-foreground">{product.delivery}</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full rounded-xl border-border text-foreground font-bold hover:bg-muted h-12 bg-transparent transition-colors">
                  View Full Specs
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
