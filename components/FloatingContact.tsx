import { Phone } from "lucide-react";

const phone = "+971526751412";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.92c-.24.68-1.4 1.25-1.94 1.33-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.91-4.35-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35h.55c.17 0 .4-.07.63.48.24.57.82 1.99.89 2.13.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.21 2.17 1.35.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-5 z-50 flex flex-col gap-3">
      <a
        href={`tel:${phone}`}
        aria-label="Call Green Mirage"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#7CB87A] text-white shadow-[0_8px_24px_rgb(0,0,0,0.22)] transition hover:bg-[#6aa868] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#3DDC3A]" />
        <Phone size={20} strokeWidth={2} />
      </a>
      <a
        href="https://wa.me/971526751412"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Green Mirage"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_8px_24px_rgb(0,0,0,0.28)] transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#3DDC3A]" />
        <WhatsAppIcon />
      </a>
    </div>
  );
}
