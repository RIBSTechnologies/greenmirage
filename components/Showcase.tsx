import { Photo } from "@/components/Photo";

export function Showcase() {
  return (
    <section className="bg-cream pb-20 pt-4">
      <div className="shell">
        <article className="mx-auto max-w-4xl rounded-3xl border border-[#E5E0D5] bg-white p-6 shadow-card sm:p-8">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.32em] text-forest-emerald">
            Spaces that grow with you
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-forest md:text-4xl">
            Corners designed for moments
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-6 text-mist">
            Plants, light, texture, and pathways that make a garden feel personal.
          </p>
          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl bg-forest-mid">
            <Photo
              src="/images/spaces-seasons.jpg"
              alt="White villa wall, pool edge, and dense green planting"
              sizes="(min-width: 1024px) 800px, 100vw"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
