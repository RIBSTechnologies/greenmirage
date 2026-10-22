import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";
import { collections } from "@/lib/data";

export function Collections() {
  return (
    <section id="collection" className="bg-cream py-20 md:py-28">
      <div className="shell space-y-20">
        {collections.map((collection) => (
          <div key={collection.title} id={collection.layout === "project" ? "gallery" : undefined}>
            <Reveal>
              <SectionHeading
                align="center"
                kicker={collection.layout === "project" ? "Inspiration" : "Collection"}
                title={collection.title}
                description={collection.text}
              />
            </Reveal>

            {collection.layout === "pill" ? (
              <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {collection.plants.map((plant) => (
                  <RevealItem key={plant.name} lift>
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
                  </RevealItem>
                ))}
              </RevealGroup>
            ) : null}

            {collection.layout === "card" ? (
              <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {collection.plants.map((plant) => (
                  <RevealItem key={plant.name} lift>
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
                  </RevealItem>
                ))}
              </RevealGroup>
            ) : null}

            {collection.layout === "project" ? (
              <>
                <RevealGroup className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {collection.plants.map((plant) => (
                    <RevealItem key={plant.name} lift>
                      <article className="overflow-hidden rounded-2xl border border-[#E5E0D5] bg-white shadow-card">
                        <div className="relative h-52 bg-forest-mid">
                          <Photo
                            src={plant.image}
                            alt={plant.name}
                            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                          />
                          {plant.badge ? (
                            <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-forest">
                              {plant.badge}
                            </span>
                          ) : null}
                        </div>
                        <div className="p-5">
                          <h3 className="font-serif text-xl text-forest">{plant.name}</h3>
                          <p className="mt-2 text-sm leading-6 text-mist">{plant.note}</p>
                        </div>
                      </article>
                    </RevealItem>
                  ))}
                </RevealGroup>
                <div className="mt-8 text-center">
                  <a href="/gallery" className="btn-outline-dark">
                    View the gallery
                  </a>
                </div>
              </>
            ) : null}
          </div>
        ))}
        <div className="text-center">
          <a href="/collections" className="btn-outline-dark">
            View collections
          </a>
        </div>
      </div>
    </section>
  );
}
