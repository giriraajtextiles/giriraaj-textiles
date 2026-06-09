"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition =
      "opacity 0.8s var(--ease-expo), transform 0.8s var(--ease-expo)";
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
