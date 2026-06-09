"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "polymer",
    label: "01",
    title: "Polymer",
    subtitle: "Where every thread begins",
    body: "Premium raw material sourced from India's leading textile manufacturers. Every batch tested for purity and consistency before it enters our facility.",
    details: [
      "Sourced from RSWM Ltd",
      "Batch tested for denier uniformity",
      "Sustainable recycled options available",
    ],
  },
  {
    id: "craft",
    label: "02",
    title: "Craft",
    subtitle: "Precision on every spool",
    body: "State-of-the-art twisting and winding machinery calibrated for consistent tension. Every meter meets exact specifications for high-speed industrial stitching.",
    details: [
      "Multi-stage quality checks",
      "Production runs from 500kg to 10+ tonnes",
      "Dedicated lines for 3-ply polyester",
    ],
  },
  {
    id: "closure",
    label: "03",
    title: "Closure",
    subtitle: "Sealed and shipped",
    body: "Finished yarn dispatched to businesses and distributors across India. Consistent quality and reliable timelines — so your packaging line never waits.",
    details: [
      "Pan-India logistics network",
      "Standard dispatch within 5–7 days",
      "Real-time order tracking",
    ],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
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
    <section id="process" ref={sectionRef} className="section-padding bg-background relative border-t border-border">
      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight mb-4 text-foreground">
            Our Process
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            From premium raw polymer to the final spool, our manufacturing process is engineered for unmatched industrial reliability.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <div key={step.id} className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-primary/50 transition-colors duration-300">
              <span className="text-primary font-bold text-sm tracking-[0.15em] uppercase block mb-4">
                {step.label}
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-primary font-medium mb-4">
                {step.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {step.body}
              </p>
              <ul className="flex flex-col gap-3">
                {step.details.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-foreground/80 flex items-start gap-3"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
