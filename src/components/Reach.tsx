"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  "Cement & Building Materials",
  "Pulses, Grains & Millets",
  "Salt & Chemicals",
  "Agriculture & Seeds",
  "Textiles & Jute",
  "General Packaging",
];

export default function Reach() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const items = gridRef.current?.children;
      if (items) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-background border-t border-border">
      <div className="container-site relative z-10">
        <div ref={headingRef} className="mb-16 text-center">
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight mb-4 text-foreground text-balance">
            Industries that depend on our thread
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            Our yarn closes the bags that feed, build, and supply the country.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="bg-card border border-border rounded-2xl px-6 py-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 group">
                <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
