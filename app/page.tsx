import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Featured } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollTop } from "@/components/ScrollTop";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Solutions } from "@/components/Solutions";
import { WhyChoose } from "@/components/WhyChoose";
import { WhyOutdoor } from "@/components/WhyOutdoor";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Solutions />
        <WhyOutdoor />
        <WhyChoose />
        <Approach />
        <Featured />
        <Services />
        <CtaBand />
        <Collections />
        <Showcase />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
