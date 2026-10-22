"use client";

import { Mail, MapPin, Phone, RefreshCw } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

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

const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function makeCode() {
  return Array.from({ length: 5 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

function drawCaptcha(canvas: HTMLCanvasElement, code: string) {
  const context = canvas.getContext("2d");
  if (!context) return;
  const { width, height } = canvas;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#F4F0E8";
  context.fillRect(0, 0, width, height);

  for (let line = 0; line < 7; line += 1) {
    context.strokeStyle = `rgba(28, 25, 23, ${0.08 + Math.random() * 0.18})`;
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
  }

  context.textBaseline = "middle";
  context.font = "700 28px Georgia, serif";
  [...code].forEach((character, index) => {
    context.save();
    context.translate(18 + index * 28, height / 2 + (Math.random() - 0.5) * 6);
    context.rotate((Math.random() - 0.5) * 0.45);
    context.fillStyle = index % 2 === 0 ? "#1C1917" : "#5C564E";
    context.fillText(character, 0, 0);
    context.restore();
  });
}

export function ContactBand() {
  return (
    <section className="bg-[#F4F0E8]">
      <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8A8175]">Contact</p>
          <h2 className="mt-3 font-serif text-4xl text-[#1C1917]">Get in Touch</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#5C564E]">
            Tell us about the property, the light, and what you want the garden to do.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex rounded-full bg-[#1C1917] px-6 py-3 text-sm font-medium tracking-wide text-[#F4F0E8] transition hover:-translate-y-0.5 hover:bg-[#3F3A34]"
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState("");
  const [answer, setAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  function refreshCaptcha() {
    setCode(makeCode());
    setAnswer("");
    setCaptchaError("");
  }

  useEffect(() => {
    refreshCaptcha();
  }, []);

  useEffect(() => {
    if (canvasRef.current && code) drawCaptcha(canvasRef.current, code);
  }, [code]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (answer.trim().toUpperCase() !== code) {
      setCaptchaError("Those characters do not match. Try the new image.");
      setCode(makeCode());
      setAnswer("");
      return;
    }
    setSent(true);
  }

  return (
    <section className="bg-[#F4F0E8] pb-20 pt-32 md:pb-28 md:pt-36">
      <div className="shell">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8A8175]">Contact</p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="font-serif text-5xl leading-[0.98] tracking-tight text-[#1C1917] md:text-6xl">
            Get in Touch
          </h1>
          <p className="max-w-md text-base leading-8 text-[#4A453E]">
            Tell us about the property, the light, and what you want the garden to do. A designer
            will reply to arrange a conversation.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#E4DDD2] bg-white p-6 shadow-[0_20px_50px_rgba(28,25,23,0.06)] sm:p-8">
            {sent ? (
              <div role="status" className="flex min-h-[420px] flex-col justify-center">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A8175]">Message received</p>
                <h2 className="mt-4 font-serif text-4xl text-[#1C1917]">Thank you.</h2>
                <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#5C564E]">
                  A designer will be in touch to arrange a private consultation. If the matter is
                  time-sensitive, call the studio directly.
                </p>
                <button
                  type="button"
                  className="mt-8 self-start rounded-full border border-[#1C1917] px-6 py-3 text-sm font-medium text-[#1C1917] transition hover:bg-[#1C1917] hover:text-[#F4F0E8]"
                  onClick={() => {
                    setSent(false);
                    refreshCaptcha();
                  }}
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A8175]">
                      Full name
                    </span>
                    <input className="field" name="name" autoComplete="name" required placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A8175]">
                      Email
                    </span>
                    <input
                      className="field"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="you@studio.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A8175]">
                    Phone
                  </span>
                  <input className="field" type="tel" name="phone" autoComplete="tel" placeholder="+971" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A8175]">
                    About the property
                  </span>
                  <textarea
                    className="field min-h-32 resize-y"
                    name="message"
                    required
                    placeholder="Site, city, and what you hope the landscape will do."
                  />
                </label>
                <div>
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A8175]">
                    Captcha
                  </span>
                  <div className="flex items-center gap-3">
                    <canvas
                      ref={canvasRef}
                      width={160}
                      height={56}
                      className="rounded-xl border border-[#E4DDD2]"
                      aria-hidden
                    />
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E4DDD2] text-[#1C1917] transition hover:bg-[#F4F0E8]"
                      aria-label="Show a new captcha"
                      onClick={refreshCaptcha}
                    >
                      <RefreshCw size={16} />
                    </button>
                  </div>
                  <input
                    className="field mt-3"
                    name="captcha"
                    value={answer}
                    autoComplete="off"
                    required
                    aria-invalid={captchaError ? true : undefined}
                    aria-describedby={captchaError ? "captcha-error" : undefined}
                    placeholder="Type the characters"
                    onChange={(event) => {
                      setAnswer(event.target.value);
                      if (captchaError) setCaptchaError("");
                    }}
                  />
                  {captchaError ? (
                    <p id="captcha-error" role="alert" className="mt-2 text-sm text-[#8A3B2C]">
                      {captchaError}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#1C1917] px-6 py-3 text-sm font-medium tracking-wide text-[#F4F0E8] transition hover:bg-[#3F3A34]"
                >
                  Request a Consultation
                </button>
              </form>
            )}
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#E4DDD2] bg-white shadow-[0_20px_50px_rgba(28,25,23,0.06)]">
            <iframe
              title="Green Mirage studio location, United Arab Emirates"
              src="https://maps.google.com/maps?q=United%20Arab%20Emirates&z=5&output=embed"
              className="h-72 w-full border-0 lg:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <ul className="space-y-4 p-6">
              {details.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F0E8] text-[#1C1917]">
                    <item.icon size={18} strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-[#1C1917] transition hover:text-[#5C564E]">
                        {item.value}
                      </a>
                    ) : (
                      <span className="mt-1 block text-[#1C1917]">{item.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
