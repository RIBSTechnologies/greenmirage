import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/motion";
import { metrics } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-card lg:mx-0">
            <div className="relative aspect-[4/3] bg-forest-mid">
              <Photo
                src="/images/about-house.jpg"
                alt="Courtyard pool, pergola, and planted walls"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="font-serif text-lg text-forest">Architectural preview</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-mist">United Arab Emirates</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-emerald">
            The studio
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight text-forest md:text-5xl">
            About Green Mirage
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-mist">
            At Green Mirage Technical Services, we transform outdoor and indoor environments into
            refined, functional, and sustainable spaces for the way people live and work.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-mist">
            Our work covers landscape design, irrigation, greenery, pergolas, play areas, and
            building maintenance. From concept to execution, every project is delivered with
            precision and a commitment to quality.
          </p>
          <a href="/about" className="btn-outline-dark mt-8">
            Our story
          </a>
          <dl className="mt-10 grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-[#E5E0D5] bg-white px-3 py-4 text-center shadow-card">
                <dt className="font-serif text-3xl text-forest">{metric.value}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.14em] text-mist">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
