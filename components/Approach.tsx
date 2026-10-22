import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";
import { steps } from "@/lib/data";

export function Approach() {
  return (
    <section id="process" className="bg-cream py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            kicker="Six steps"
            title="Our Approach"
            description="Consultation, vision, design, visualization, materials, and support through execution."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((step) => (
            <RevealItem key={step.number} lift>
              <article className="h-full rounded-2xl border border-[#E5E0D5] bg-white p-5 text-center shadow-card">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold">
                  <step.icon size={18} strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 font-serif text-lg leading-snug text-forest">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{step.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
        <div className="mt-8 text-center">
          <a href="/approach" className="btn-outline-dark">
            See the approach
          </a>
        </div>
      </div>
    </section>
  );
}
