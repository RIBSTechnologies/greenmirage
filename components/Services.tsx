"use client";

import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";
import { services } from "@/lib/data";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="What we do"
            title="Our Services"
            description="Hard landscape, soft landscape, irrigation, MEP and swimming pools, and cleaning and interior finishes."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.slug} lift>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-[#E5E0D5] bg-white shadow-card"
              >
                <div className="relative h-44 overflow-hidden bg-forest-mid">
                  <Photo
                    src={service.image}
                    alt={service.title}
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-forest transition group-hover:text-forest-emerald">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-mist">{service.text}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
