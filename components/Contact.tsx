"use client";

import { Reveal } from "@/components/motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

const details = [
  {
    icon: MapPin,
    label: "Studio",
    value: "By appointment · United Arab Emirates",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+971 52 675 1412",
    href: "tel:+971526751412",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@greenmirage.ae",
    href: "mailto:info@greenmirage.ae",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-forest py-20 md:py-28">
      <div className="shell grid items-start gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Contact</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.12] text-parchment md:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-sage">
            Tell us about the property, the light, and what you want the garden to do. A designer
            will reply to arrange a conversation.
          </p>
          <ul className="mt-10 space-y-3">
            {details.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-forest-deep px-4 py-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-gold">
                  <item.icon size={18} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-sage">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-parchment transition hover:text-gold">
                      {item.value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-parchment">{item.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-white/10 bg-forest-deep p-6 sm:p-8">
            {sent ? (
              <div role="status" className="flex min-h-[420px] flex-col justify-center">
                <p className="text-[11px] uppercase tracking-[0.28em] text-forest-emerald">
                  Message received
                </p>
                <h3 className="mt-4 font-serif text-4xl text-parchment">Thank you.</h3>
                <p className="mt-4 max-w-sm text-[15px] leading-7 text-sage">
                  A designer will be in touch to arrange a private consultation. If the matter is
                  time-sensitive, call the studio directly.
                </p>
                <button type="button" className="btn-outline mt-8 self-start" onClick={() => setSent(false)}>
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-sage">
                      Full name
                    </span>
                    <input className="field-dark" name="name" autoComplete="name" required placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-sage">
                      Email
                    </span>
                    <input
                      className="field-dark"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="you@studio.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-sage">
                    Phone
                  </span>
                  <input className="field-dark" type="tel" name="phone" autoComplete="tel" placeholder="+971" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-sage">
                    About the property
                  </span>
                  <textarea
                    className="field-dark min-h-32 resize-y"
                    name="message"
                    required
                    placeholder="Site, city, and what you hope the landscape will do."
                  />
                </label>
                <button type="submit" className="btn-gold w-full">
                  Request a Consultation
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
