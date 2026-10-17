"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";
import { outdoorValues } from "@/lib/data";

export function WhyOutdoor() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="Emotionally"
            title="Why Outdoor Spaces Matter"
            description="Your outdoor area is the first space that welcomes you to breathe, pause, and reconnect. A balcony garden or a villa backyard becomes a real extension of home."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {outdoorValues.map((item) => (
            <RevealItem key={item.title} lift>
              <article className="h-full rounded-2xl border border-[#E5E0D5] bg-white p-7 shadow-card transition duration-300 hover:border-forest-emerald/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-warm text-forest-emerald">
                  <item.icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-2xl leading-tight text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{item.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
