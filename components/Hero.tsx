"use client";

import { heroFeatures } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Modern house with a pool overlooking the mountains"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,24,4,0.62)_0%,rgba(4,24,4,0.36)_42%,rgba(4,24,4,0.16)_70%,rgba(4,24,4,0.5)_100%)]"
      />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-8 pt-28 text-center">
        <div className="max-w-4xl [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-gold-bright">
            Landscape · Architecture · Horticulture
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where Technology
            <span className="mt-1 block italic text-white">Meets Nature</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Pioneering sustainable, intelligent outdoor and interior landscape solutions tailored
            for the way people live and work.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 [text-shadow:none]">
            <a href="#services" className="btn-gold">
              Explore Services
            </a>
            <a href="/gallery" className="btn-outline">
              View Projects
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]">
        <ul className="shell grid grid-cols-2 gap-x-6 gap-y-5 pb-10 pt-2 md:grid-cols-4">
          {heroFeatures.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3">
              <feature.icon className="mt-0.5 shrink-0 text-gold-bright" size={20} strokeWidth={1.5} />
              <span>
                <span className="block text-sm font-medium text-white">{feature.title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-white/85">{feature.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
