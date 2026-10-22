import { ContactBand } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { ScrollTop } from "@/components/ScrollTop";
import { collections } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collections | Green Mirage",
  description:
    "Natural and artificial plant collections for UAE villas, courts, terraces, and interiors.",
};

export default function CollectionsPage() {
  const plants = collections.filter((collection) => collection.layout !== "project");

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
        <section className="shell pb-8 pt-32 md:pt-36">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-emerald">
            Collection
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="max-w-xl font-serif text-5xl leading-[1.02] tracking-tight text-forest md:text-6xl">
              Collections
            </h1>
            <p className="max-w-md text-[15px] leading-7 text-mist">
              Natural specimens and finished artificial trees for villas, courts, and covered rooms.
            </p>
          </div>
        </section>

        {plants.map((collection) => (
          <section key={collection.title} className="shell py-10 md:py-14">
            <h2 className="font-serif text-3xl text-forest md:text-4xl">{collection.title}</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-mist">{collection.text}</p>

            {collection.layout === "pill" ? (
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {collection.plants.map((plant) => (
                  <li key={plant.name}>
                    <article className="relative h-64 overflow-hidden rounded-2xl bg-forest-mid shadow-card">
                      <Photo
                        src={plant.image}
                        alt={plant.name}
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      />
                      <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-forest">
                        {plant.name}
                      </span>
                    </article>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {collection.plants.map((plant) => (
                  <li key={plant.name}>
                    <article className="h-full overflow-hidden rounded-2xl border border-[#E5E0D5] bg-white shadow-card">
                      <div className="relative h-52 bg-forest-mid">
                        <Photo
                          src={plant.image}
                          alt={plant.name}
                          sizes="(min-width: 1280px) 25vw, 50vw"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-xl text-forest">{plant.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-mist">{plant.note}</p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="shell pb-20 pt-4">
          <Link href="/gallery" className="btn-outline-dark">
            View the gallery
          </Link>
        </section>
        <ContactBand />
      </main>
      <Footer />
      <ScrollTop />
      <FloatingContact />
    </>
  );
}
