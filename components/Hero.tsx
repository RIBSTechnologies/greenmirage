"use client";

import { Photo } from "@/components/Photo";
import { heroFeatures } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <Photo
        src="/images/hero-bg.jpg"
        alt="White villa with a palm-lined swimming pool"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/75 via-forest/55 to-forest/80" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-8 pt-28 text-center">
        <div className="max-w-4xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-gold">
            Landscape · Architecture · Horticulture
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-parchment sm:text-6xl lg:text-7xl">
            Where Technology
            <span className="mt-1 block italic text-[#F4F1EA]">Meets Nature</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-sage sm:text-lg">
            Pioneering sustainable, intelligent outdoor and interior landscape solutions tailored
            for the way people live and work.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#services" className="btn-gold">
              Explore Services
            </a>
            <a href="#gallery" className="btn-outline">
              View Projects
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <ul className="shell grid grid-cols-2 gap-x-6 gap-y-5 pb-10 pt-2 md:grid-cols-4">
          {heroFeatures.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3">
              <feature.icon className="mt-0.5 shrink-0 text-gold" size={20} strokeWidth={1.5} />
              <span>
                <span className="block text-sm font-medium text-parchment">{feature.title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-sage">{feature.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
