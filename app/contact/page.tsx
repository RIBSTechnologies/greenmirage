import { Contact } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollTop } from "@/components/ScrollTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Green Mirage",
  description:
    "Reach Green Mirage Technical Services in the United Arab Emirates to arrange a landscape consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <FloatingContact />
    </>
  );
}
