"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "15+", label: "Years in operation" },
  { value: "500+", label: "Tons delivered annually" },
  { value: "100+", label: "Active business clients" },
  { value: "5–7", label: "Days standard dispatch" },
];

const reasons = [
  {
    title: "Trusted Sourcing",
    desc: "Raw materials from industry leaders. Every batch tested before it enters our facility.",
  },
  {
    title: "Consistent Quality",
    desc: "Every spool checked for tensile strength, denier uniformity, and heat resistance. Your production runs without interruption.",
  },
  {
    title: "Reliable Supply",
    desc: "Consistent inventory levels and on-schedule delivery. Your packaging line never waits.",
  },
  {
    title: "Industry Knowledge",
    desc: "Decades serving cement, agriculture, and packaging. We understand your requirements without being told.",
  },
];

export default function WhyGiriraaj() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);

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

      const statCards = statsRef.current?.children;
      if (statCards) {
        gsap.fromTo(
          statCards,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const reasonCards = reasonsRef.current?.children;
      if (reasonCards) {
        gsap.fromTo(
          reasonCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: reasonsRef.current,
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
    <section ref={sectionRef} id="why" className="section-padding relative bg-background border-t border-border">
      <div className="container-site">
        <div ref={headingRef} className="mb-16 text-center">
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight mb-4 text-foreground text-balance">
            A partner you can count on
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            We deliver uncompromising quality, on time, every time.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-3xl p-8 text-center shadow-sm">
              <div className="text-[clamp(2rem,3vw,3rem)] font-extrabold text-primary leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div ref={reasonsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-card border border-border rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50">
              <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-medium">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
