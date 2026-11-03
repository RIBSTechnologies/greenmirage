import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Collections } from "@/components/Collections";
import { ContactBand } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Featured } from "@/components/Featured";
import { FloatingContact } from "@/components/FloatingContact";
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
        <ContactBand />
      </main>
      <Footer />
      <ScrollTop />
      <FloatingContact />
    </>
  );
}
