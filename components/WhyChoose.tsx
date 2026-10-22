"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";
import { reasons } from "@/lib/data";

export function WhyChoose() {
  return (
    <section className="bg-forest py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            tone="light"
            kicker="Our commitment"
            title="How Are We Different"
            description="Maintenance, trusted brands, smart irrigation, and an expert horticulturist, with daily updates from the site."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((reason, index) => (
            <RevealItem key={reason.title} lift>
              <article className="h-full rounded-2xl border border-white/10 bg-forest-deep p-5 transition duration-300 hover:border-gold/40 hover:bg-forest-mid">
                <div className="flex items-center justify-between">
                  <reason.icon className="text-gold" size={20} strokeWidth={1.5} />
                  <span className="font-serif text-sm text-gold/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl leading-snug text-parchment">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-sage">{reason.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
