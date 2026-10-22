import { ContactBand } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { ScrollTop } from "@/components/ScrollTop";
import { getService, services, steps } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
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

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
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
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">{service.text}</p>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-28">
          <div className="shell grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-serif text-3xl text-forest md:text-4xl">What this includes</h2>
              <ul className="mt-8 space-y-4">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-7 text-ink">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-forest-emerald" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="rounded-3xl border border-[#E5E0D5] bg-white p-8 shadow-card">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-forest-emerald">
                How we deliver it
              </p>
              <ol className="mt-6 space-y-4">
                {steps.map((step) => (
                  <li key={step.number} className="flex gap-3">
                    <span className="font-serif text-sm text-forest-emerald">{step.number}</span>
                    <span>
                      <span className="block text-sm font-medium text-forest">{step.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-mist">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <a href="/contact" className="btn-gold mt-8 w-full">
                Request a Consultation
              </a>
            </aside>
          </div>
        </section>

        <section className="bg-cream-warm py-20">
          <div className="shell">
            <h2 className="font-serif text-3xl text-forest md:text-4xl">Other services</h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-[#E5E0D5] bg-white shadow-card"
                  >
                    <div className="relative h-36 overflow-hidden bg-forest-mid">
                      <Photo src={item.image} alt="" sizes="(min-width: 1280px) 25vw, 50vw" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg text-forest transition group-hover:text-forest-emerald">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-mist">{item.text}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
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
