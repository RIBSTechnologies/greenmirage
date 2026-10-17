import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/motion";

export function Featured() {
  return (
    <section className="bg-cream pb-4 pt-2">
      <div className="shell">
        <Reveal>
          <article className="relative min-h-[420px] overflow-hidden rounded-3xl bg-forest">
            <Photo
              src="/images/feature-banner.jpg"
              alt="Winding pool set in dense tropical planting"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/55 to-forest/20" />
            <div className="relative z-10 flex min-h-[420px] max-w-xl flex-col justify-center px-8 py-14 sm:px-12">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
                All spaces
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-parchment md:text-5xl">
                Where Technology Meets Nature
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-[#E7EEEA]">
                Sustainable, elegant environments where nature, functionality, and craftsmanship
                come together.
              </p>
              <a href="#services" className="btn-gold mt-8 self-start">
                Our Services
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
