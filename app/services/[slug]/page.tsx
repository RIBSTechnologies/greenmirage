import { ContactBand } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { ScrollTop } from "@/components/ScrollTop";
import { getService, services, steps } from "@/lib/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service | Green Mirage" };
  return {
    title: `${service.title} | Green Mirage`,
    description: service.text,
  };
}

export default function ServicePage({ params }: { params: Params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main id="main">
        <section className="relative flex min-h-[72svh] items-end overflow-hidden">
          <Photo src={service.image} alt={service.title} priority sizes="100vw" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/35 to-forest-deep/20"
          />
          <div className="shell relative z-10 pb-14 pt-32">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold-bright">
              Our Services
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.08] text-white md:text-6xl">
              {service.title}
            </h1>
            {service.menu ? (
              <p className="mt-3 text-sm tracking-wide text-gold-bright">{service.menu}</p>
            ) : null}
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">{service.text}</p>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-24">
          <div className="shell">
            <h2 className="font-serif text-3xl text-forest md:text-4xl">What this includes</h2>
            <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
              {service.areas.map((area, index) => {
                const flip = index % 2 === 1;
                return (
                  <article key={area.title} className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
                    <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] lg:absolute lg:inset-0 lg:aspect-auto">
                        <Photo src={area.image} alt={area.alt} sizes="(min-width: 1024px) 50vw, 100vw" />
                      </div>
                    </div>
                    <div className={flip ? "lg:order-1" : ""}>
                      <p className="font-serif text-sm tabular-nums text-[#C4B8A5]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl text-forest md:text-4xl">{area.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-mist">{area.text}</p>
                      <ul className="mt-6 space-y-4">
                        {area.points.map((point) => (
                          <li key={point.label}>
                            <p className="text-sm font-medium text-ink">{point.label}</p>
                            <p className="mt-1 text-sm leading-6 text-mist">{point.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {service.reference ? (
          <section className="bg-cream-warm py-20">
            <div className="shell">
              <h2 className="font-serif text-3xl text-forest md:text-4xl">Regional Botanical Reference</h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-mist">
                A foundational reference list of botanical selections used throughout UAE projects, grouped as live
                natural specimens and premium low-maintenance artificial alternatives.
              </p>
              <div className="mt-8 overflow-x-auto rounded-3xl border border-[#E5E0D5] bg-white shadow-card">
                <table className="w-full min-w-[40rem] text-left text-sm">
                  <thead className="bg-[#F4F0E8] text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
                    <tr>
                      <th className="px-5 py-4 font-medium">
                        <span className="sr-only">Photo</span>
                      </th>
                      <th className="px-5 py-4 font-medium">Collection</th>
                      <th className="px-5 py-4 font-medium">Specimen</th>
                      <th className="px-5 py-4 font-medium">Placement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.reference.map((row) => (
                      <tr key={row.name} className="border-t border-[#E5E0D5]">
                        <td className="px-5 py-3">
                          <span className="relative block h-14 w-14 overflow-hidden rounded-xl">
                            <Photo src={row.image} alt="" sizes="56px" />
                          </span>
                        </td>
                        <td className="px-5 py-4 text-forest">{row.type}</td>
                        <td className="px-5 py-4 font-medium text-ink">{row.name}</td>
                        <td className="px-5 py-4 leading-6 text-mist">{row.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#F4F0E8] py-20 md:py-24">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="font-serif text-3xl text-[#1C1917] md:text-4xl">How we deliver it</h2>
                <p className="mt-3 text-sm leading-6 text-[#5C564E]">
                  Six steps, from the first conversation through to the work on site.
                </p>
              </div>
              <a href="/contact" className="btn-gold">
                Request a Consultation
              </a>
            </div>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#E4DDD2] bg-[#E4DDD2] sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <li key={step.number} className="bg-[#FBF9F5] p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl tabular-nums text-[#C4B8A5]">{step.number}</span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F4F0E8] text-[#1C1917]">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                    </div>
                    <h3 className="mt-8 font-serif text-2xl text-[#1C1917]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5C564E]">{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
      <ScrollTop />
      <FloatingContact />
    </>
  );
}
