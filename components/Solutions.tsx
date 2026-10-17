import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/motion";
import { capabilities } from "@/lib/data";
import { Check } from "lucide-react";

export function Solutions() {
  return (
    <section className="bg-forest py-20 text-parchment md:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
            What landscape design truly means
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.12] tracking-tight md:text-5xl">
            More than spaces. It’s a feeling.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-sage">
            Landscape design is not just plants, tiles, or outdoor furniture. It shapes how you feel
            the moment you step outside, where nature, design, and lifestyle meet.
          </p>
          <ul className="mt-8 space-y-5">
            {capabilities.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Check size={14} strokeWidth={1.75} />
                </span>
                <span className="text-[15px] leading-7 text-[#E7EEEA]">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="overflow-hidden rounded-2xl bg-white shadow-card">
            <div className="relative aspect-[5/4]">
              <Photo
                src="/images/service-lounge.jpg"
                alt="Outdoor lounge with seating and garden planting"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
