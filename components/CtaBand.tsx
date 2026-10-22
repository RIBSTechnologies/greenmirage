import { Photo } from "@/components/Photo";

export function CtaBand() {
  return (
    <section className="relative min-h-[320px] bg-forest">
      <Photo
        src="/images/service-villa.jpg"
        alt=""
        sizes="100vw"
        className="opacity-40"
      />
      <div className="absolute inset-0 bg-forest/75" />
      <div className="shell relative z-10 flex min-h-[320px] flex-col items-center justify-center py-16 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Green Mirage</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-parchment md:text-5xl">
          Where everyday life meets nature
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-sage">
          Morning coffee corners, play spaces, evening rest, or a quiet place to pause. Outdoor
          spaces become a meaningful extension of home.
        </p>
        <a href="/contact" className="btn-gold mt-8">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
