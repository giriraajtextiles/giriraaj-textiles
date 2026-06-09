"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const links = [
  { href: "#process", label: "Process" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled(y > 100);
          setHidden(y > 300 && y > lastY);
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo",
        scrolled && "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3",
        !scrolled && "bg-transparent py-5",
        hidden && "-translate-y-full"
      )}
    >
      <div className="container-site flex items-center justify-between">
        <a
          href="#"
          className="text-base font-semibold text-foreground no-underline tracking-tight"
        >
          Giriraaj Textiles
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="no-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button render={<a href="#contact" />} nativeButton={false}>Get in Touch</Button>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" aria-label="Menu" />}
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-5 list-none m-0 p-4">
              {links.map((link) => (
                <li key={link.href}>
                  <SheetClose
                    render={
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors no-underline text-base"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                </li>
              ))}
              <li>
                <SheetClose
                  render={
                    <a
                      href="#contact"
                      className={buttonVariants({ className: "w-full" })}
                    />
                  }
                >
                  Get in Touch
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
