import { nav, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep text-sage">
      <div className="shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="/" className="inline-flex items-center gap-2.5 text-parchment">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-1 shadow-sm">
              <img
                src="/logo.png"
                alt=""
                width={52}
                height={52}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-serif text-xl leading-none tracking-wide sm:text-2xl">Green Mirage</span>
          </a>
          <p className="mt-5 text-sm leading-6">
            Where technology meets nature. Sustainable outdoor and interior landscapes for private
            residences.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm transition hover:text-parchment">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a href={`/services/${service.slug}`} className="text-sm transition hover:text-parchment">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Studio</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>United Arab Emirates</li>
            <li>
              <a href="mailto:info@greenmirage.ae" className="transition hover:text-parchment">
                info@greenmirage.ae
              </a>
            </li>
            <li>
              <a href="tel:+971526751412" className="transition hover:text-parchment">
                +971 52 675 1412
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Green Mirage. All rights reserved.</p>
          <p>Landscapes composed for private clients.</p>
        </div>
      </div>
    </footer>
  );
}
