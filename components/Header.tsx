"use client";

import { nav, services } from "@/lib/data";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const onService = pathname.startsWith("/services");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest/90 backdrop-blur-md">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={close}>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-1 shadow-sm ring-1 ring-white/40">
            <img
              src="/logo.png"
              alt=""
              width={52}
              height={52}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-serif text-xl leading-none tracking-wide text-parchment sm:text-2xl">
            Green Mirage
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="group relative before:absolute before:inset-x-0 before:top-full before:h-3 before:content-['']"
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 py-3 text-[13px] tracking-wide transition duration-300 hover:text-gold ${
                    onService ? "text-gold" : "text-parchment/80"
                  }`}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={14} className="transition duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[34rem] -translate-x-1/2 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-[#E4DDD2] bg-[#FBF9F5] shadow-[0_22px_50px_rgba(16,32,16,0.22)]">
                    <p className="border-b border-[#E4DDD2] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[#8A8175]">
                      Our services
                    </p>
                    <ul className="grid grid-cols-2 gap-1 p-2">
                      {services.map((service, index) => {
                        const href = `/services/${service.slug}`;
                        const active = pathname === href;
                        return (
                          <li key={service.slug}>
                            <Link
                              href={href}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] transition ${
                                active
                                  ? "bg-forest text-parchment"
                                  : "text-[#1C1917] hover:bg-[#F4F0E8]"
                              }`}
                            >
                              <span
                                className={`font-serif text-[12px] tabular-nums ${
                                  active ? "text-gold-bright" : "text-[#C4B8A5]"
                                }`}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="leading-snug">{service.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-wide text-parchment/80 transition duration-300 hover:text-gold"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a href="/contact" className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
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
            {nav.map((item) =>
              item.label === "Services" ? (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={`block flex-1 rounded-xl px-3 py-3 text-base transition hover:bg-white/5 hover:text-gold ${
                        onService ? "text-gold" : "text-parchment/90"
                      }`}
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-parchment"
                      aria-expanded={servicesOpen}
                      aria-label={servicesOpen ? "Hide services" : "Show services"}
                      onClick={() => setServicesOpen((value) => !value)}
                    >
                      <ChevronDown size={18} className={`transition ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {servicesOpen ? (
                    <ul className="mb-2 ml-3 overflow-hidden rounded-2xl bg-[#FBF9F5] p-2">
                      {services.map((service, index) => {
                        const href = `/services/${service.slug}`;
                        const active = pathname === href;
                        return (
                          <li key={service.slug}>
                            <Link
                              href={href}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                                active ? "bg-forest text-parchment" : "text-[#1C1917] hover:bg-[#F4F0E8]"
                              }`}
                              onClick={close}
                            >
                              <span
                                className={`font-serif text-[12px] tabular-nums ${
                                  active ? "text-gold-bright" : "text-[#C4B8A5]"
                                }`}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              {service.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-3 text-base text-parchment/90 transition hover:bg-white/5 hover:text-gold"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <a href="/contact" className="btn-gold mt-4 w-full" onClick={close}>
            Get in Touch
          </a>
        </nav>
      ) : null}
    </header>
  );
}
