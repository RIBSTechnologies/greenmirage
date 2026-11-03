import { ContactBand } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollTop } from "@/components/ScrollTop";
import { steps } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | Green Mirage",
  description:
    "Consultation, vision, design, visualization, materials, and support through execution.",
};

export default function ApproachPage() {
  return (
    <>
      <Header />
      <main id="main" className="bg-cream">
        <section className="shell pb-20 pt-32 md:pt-36">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-emerald">
            Six steps
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="max-w-xl font-serif text-5xl leading-[1.02] tracking-tight text-forest md:text-6xl">
              Our Approach
            </h1>
            <p className="max-w-md text-[15px] leading-7 text-mist">
              Consultation, vision, design, visualization, materials, and support through execution.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex h-full flex-col rounded-2xl border border-[#E5E0D5] bg-white p-7 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-gold">
                    <step.icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-3xl text-[#C4B8A5]">{step.number}</span>
                </div>
                <h2 className="mt-6 font-serif text-2xl leading-snug text-forest">{step.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-mist">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
        <ContactBand />
      </main>
      <Footer />
      <ScrollTop />
      <FloatingContact />
    </>
  );
}
