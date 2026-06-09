"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

function HeroGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const shapes = shapesRef.current;
    if (!container || !shapes) return;

    const ctx = gsap.context(() => {
      // Create a floating animation for the abstract shapes
      gsap.to(".air-shape", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-5, 5)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1,
      });

      // Scroll-driven parallax for the whole graphic
      gsap.to(shapes, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 right-0 w-1/2 pointer-events-none select-none hidden lg:block overflow-hidden pt-24 pr-12 opacity-80">
      <svg
        ref={shapesRef}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        {/* Sleek metallic/neon abstract shapes for B2B */}
        <rect className="air-shape" x="50" y="100" width="120" height="280" rx="60" fill="oklch(0.98 0 0)" opacity="0.1" stroke="oklch(0.98 0 0)" strokeWidth="2" />
        <rect className="air-shape" x="200" y="50" width="100" height="350" rx="50" fill="transparent" stroke="oklch(0.98 0 0)" strokeWidth="1" opacity="0.3" />
        <rect className="air-shape" x="320" y="150" width="140" height="220" rx="70" fill="oklch(0.5 0.2 250)" opacity="0.15" />
        
        {/* Soft decorative blur */}
        <circle cx="250" cy="250" r="200" fill="oklch(0.5 0.2 250)" opacity="0.1" filter="blur(60px)" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: content,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, content);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <HeroGraphic />

      <div ref={contentRef} className="container-site relative z-10 w-full lg:w-3/5 pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card shadow-sm text-xs text-foreground font-semibold mb-8 tracking-wide">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          Beawar, Rajasthan
        </div>

        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight mb-6 text-foreground text-balance">
          High-Tenacity Industrial <br />
          <span className="text-primary opacity-90">Sewing Thread.</span>
        </h1>

        <p className="text-[clamp(1.1rem,1.5vw,1.3rem)] text-muted-foreground leading-relaxed max-w-[500px] mb-10 font-medium">
          You're in the right place. We manufacture premium polyester and polypropylene yarn built for scale and delivered exactly on time.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-background px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20"
            render={<a href="#products" />}
            nativeButton={false}
          >
            Explore Products
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-border hover:border-foreground/50 hover:bg-card text-foreground px-8 py-6 text-lg font-bold bg-transparent transition-colors"
            render={<a href="#process" />}
            nativeButton={false}
          >
            See Our Process
          </Button>
        </div>
      </div>
    </section>
  );
}
