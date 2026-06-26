import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import CTABand from "@/components/CTABand";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Gallery />
      <Reviews />
      <ServiceAreas />
      <CTABand />
      <ContactForm />
      <Footer />
    </main>
  );
}
