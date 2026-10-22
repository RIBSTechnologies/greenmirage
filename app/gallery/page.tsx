import { ContactBand } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { ScrollTop } from "@/components/ScrollTop";
import { collections } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Green Mirage",
  description: "Villas, terraces, lounges, and pool courts from Green Mirage projects.",
};

export default function GalleryPage() {
  const gallery = collections.find((collection) => collection.layout === "project");
  const projects = gallery?.plants ?? [];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="bg-cream">
        <section className="shell pb-16 pt-32 md:pt-36">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-emerald">
            Inspiration
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="max-w-xl font-serif text-5xl leading-[1.02] tracking-tight text-forest md:text-6xl">
              Gallery
            </h1>
            <p className="max-w-md text-[15px] leading-7 text-mist">
              {gallery?.text ?? "Villas, terraces, lounges, and pool courts from Green Mirage projects."}
            </p>
          </div>

          <ul className="mt-12 grid auto-rows-[18rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[20rem] lg:grid-cols-3">
            {projects.map((project, index) => (
              <li
                key={project.name}
                className={index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              >
                <article className="group relative h-full overflow-hidden rounded-3xl bg-forest-mid">
                  <Photo
                    src={project.image}
                    alt={project.name}
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 66vw, 100vw"
                        : "(min-width: 1024px) 33vw, 50vw"
                    }
                    className="transition duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    {project.badge ? (
                      <p className="text-[11px] uppercase tracking-[0.22em] text-gold-bright">
                        {project.badge}
                      </p>
                    ) : null}
                    <h2 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">{project.name}</h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/85">{project.note}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <ContactBand />
      </main>
      <Footer />
      <ScrollTop />
      <FloatingContact />
    </>
  );
}
