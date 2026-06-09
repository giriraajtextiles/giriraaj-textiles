"use client";

import { useEffect, useRef, useActionState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact, type FormState } from "@/app/actions/contact";

gsap.registerPlugin(ScrollTrigger);

const initialState: FormState = {
  success: false,
  message: "",
};

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-500 text-xs mt-1">{msg}</p>;
}

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  const err = (field: string) => state.errors?.[field]?.[0];

  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative overflow-hidden bg-background border-t border-border"
    >
      <div className="container-site relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div ref={infoRef} className="pt-8">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight mb-4 text-foreground text-balance">
                Let's build together
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10 font-medium max-w-sm">
                Get pricing, specifications, and delivery timelines instantly.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-0.5">Call Us</p>
                    <a href="tel:+917725926519" className="text-lg font-bold text-foreground no-underline hover:text-primary transition-colors">
                      +91 77259 26519
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-0.5">Email</p>
                    <a href="mailto:info@giriraajtextiles.com" className="text-lg font-bold text-foreground no-underline hover:text-primary transition-colors">
                      info@giriraajtextiles.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-0.5">Headquarters</p>
                    <span className="text-lg font-bold text-foreground">Ahmedabad, Gujarat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef}>
            {state.success ? (
              <div className="bg-card border border-border shadow-xl rounded-3xl p-12 text-center">
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Message sent</h3>
                <p className="text-muted-foreground font-medium">{state.message}</p>
              </div>
            ) : (
              <form
                action={formAction}
                className="bg-card border border-border shadow-xl shadow-primary/5 rounded-3xl p-8 sm:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-semibold">Your Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Patel"
                      className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-12"
                      aria-invalid={!!err("name")}
                    />
                    <ErrorMsg msg={err("name")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-semibold">Company</Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="e.g. Patel Industries"
                      className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="rajesh@company.com"
                      className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-12"
                      aria-invalid={!!err("email")}
                    />
                    <ErrorMsg msg={err("email")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-semibold">Phone</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 99999 99999"
                      className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="product_interest" className="text-foreground font-semibold">Product Interest</Label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    className="flex h-12 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a product...</option>
                    <option value="synthetic_sewing_thread">Synthetic Sewing Thread</option>
                    <option value="pp_multifilament">PP Multifilament</option>
                    <option value="custom">Custom Requirement</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthly_quantity" className="text-foreground font-semibold">Monthly Quantity</Label>
                    <select
                      id="monthly_quantity"
                      name="monthly_quantity"
                      className="flex h-12 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select range...</option>
                      <option value="under_1_ton">&lt; 1 Ton</option>
                      <option value="1_to_5_tons">1 - 5 Tons</option>
                      <option value="5_to_20_tons">5 - 20 Tons</option>
                      <option value="20_plus_tons">20+ Tons</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-foreground font-semibold">Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="flex h-12 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select timeline...</option>
                      <option value="immediate">Immediate</option>
                      <option value="1_to_3_months">1 - 3 Months</option>
                      <option value="3_to_6_months">3 - 6 Months</option>
                      <option value="researching">Just Researching</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="message" className="text-foreground font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Any specific technical requirements or questions?"
                    className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary min-h-[120px] resize-y"
                    aria-invalid={!!err("message")}
                  />
                  <ErrorMsg msg={err("message")} />
                </div>

                {state.message && !state.success && (
                  <p className="text-red-500 text-sm mb-4 font-medium">{state.message}</p>
                )}

                <Button type="submit" disabled={pending} size="lg" className="w-full rounded-xl bg-primary hover:bg-primary/90 text-background font-bold h-14 text-lg shadow-lg shadow-primary/20">
                  {pending ? "Sending..." : "Submit Enquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
