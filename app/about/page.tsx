import { ContactBand } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { ScrollTop } from "@/components/ScrollTop";
import { reasons } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Green Mirage",
  description:
    "Green Mirage Technical Services creates sustainable outdoor and indoor landscapes, and delivers building maintenance across the UAE.",
};

const paragraphs = [
  "At Green Mirage Technical Services, we specialize in transforming outdoor and indoor environments into aesthetically refined, functional, and sustainable spaces that enhance the way people live, work, and experience their surroundings. By integrating creativity, technical expertise, and innovative smart solutions, we deliver comprehensive landscape services tailored to each client’s unique vision and requirements.",
  "Our core expertise includes landscape design, irrigation systems, interior and exterior greenery solutions, pergolas, and outdoor recreational facilities such as children’s play areas and swings. We also provide reliable building maintenance services, including cleaning, plaster works, carpentry and wood flooring, as well as electrical fitting, installation, repair, and maintenance. From concept to execution, every project is delivered with precision, attention to detail, and a strong commitment to quality.",
  "We are committed to delivering high-quality workmanship across every project we undertake. At Green Mirage Technical Services, quality is never compromised. We focus on durability, precision, and client satisfaction in every detail of our work.",
  "Whether for residential, commercial, or public developments, we create sustainable and elegant environments where nature, functionality, and craftsmanship come together seamlessly.",
  "At Green Mirage, we go beyond designing and building spaces—we create trust, deliver quality, and build lasting value and experiences.",
];

const expertise = [
  "Landscape design",
  "Irrigation systems",
  "Interior and exterior greenery",
  "Pergolas",
  "Children’s play areas and swings",
  "Cleaning and plaster works",
  "Carpentry and wood flooring",
  "Electrical fitting, installation, repair, and maintenance",
];

export default function AboutPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="bg-[#F4F0E8] text-[#1C1917]">
        <section className="shell grid items-end gap-10 pb-16 pt-32 lg:grid-cols-12 lg:gap-14 lg:pt-36">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[#8A8175]">The studio</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              About
              <span className="mt-1 block italic text-[#5C564E]">Green Mirage</span>
            </h1>
            <p className="mt-8 text-base leading-8 text-[#4A453E] sm:text-lg">{paragraphs[0]}</p>
          </div>
          <figure className="lg:col-span-7">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-[#E7E1D6] shadow-[0_30px_80px_rgba(28,25,23,0.12)]">
              <Photo
                src="/images/about-house.jpg"
                alt="Courtyard pool, pergola, and planted walls"
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#8A8175]">
              <span>Courtyard preview</span>
              <span>United Arab Emirates</span>
            </figcaption>
          </figure>
        </section>

        <section className="bg-white">
          <div className="shell grid gap-14 py-20 lg:grid-cols-12 lg:py-28">
            <div className="space-y-6 lg:col-span-7">
              {paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 28)} className="text-[16px] leading-8 text-[#3F3A34]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8A8175]">
                Core expertise
              </p>
              <ol className="mt-6 divide-y divide-[#E7E1D6] border-y border-[#E7E1D6]">
                {expertise.map((item, index) => (
                  <li key={item} className="flex items-baseline gap-4 py-3.5">
                    <span className="font-serif text-sm text-[#C4B8A5]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-[#1C1917]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-[#1C1917] text-[#F4F0E8]">
          <blockquote className="shell max-w-5xl py-20 md:py-28">
            <p className="font-serif text-3xl italic leading-[1.25] sm:text-4xl md:text-5xl">
              “We create trust, deliver quality, and build lasting value and experiences.”
            </p>
            <footer className="mt-8 text-[11px] uppercase tracking-[0.32em] text-[#C4B8A5]">
              Green Mirage Technical Services
            </footer>
          </blockquote>
        </section>

        <section className="bg-[#F4F0E8] py-20 md:py-28">
          <div className="shell">
            <div className="max-w-xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8A8175]">
                Our commitment
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-[0.98] tracking-tight text-[#1C1917] md:text-6xl">
                How Are We Different
              </h2>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <li
                  key={reason.title}
                  className="flex h-full flex-col rounded-2xl border border-[#E4DDD2] bg-white p-7 shadow-[0_10px_30px_rgba(28,25,23,0.04)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F0E8] text-[#1C1917]">
                      <reason.icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="font-serif text-2xl text-[#C4B8A5]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl leading-snug text-[#1C1917]">{reason.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#5C564E]">{reason.text}</p>
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
