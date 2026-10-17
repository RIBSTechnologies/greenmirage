"use client";

import { nav } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest/90 backdrop-blur-md">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="" width={40} height={40} className="h-10 w-10" />
          <span className="font-serif text-lg tracking-wide text-parchment">Green Mirage</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-parchment/80 transition duration-300 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
            Get in Touch
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-parchment lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="h-[calc(100svh-5rem)] overflow-y-auto border-t border-white/10 bg-forest px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-base text-parchment/90 transition hover:bg-white/5 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-gold mt-4 w-full" onClick={() => setOpen(false)}>
            Get in Touch
          </a>
        </nav>
      ) : null}
    </header>
  );
}
