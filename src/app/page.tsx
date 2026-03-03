import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import ROI from "@/components/ROI";
import Benefits from "@/components/Benefits";
import Transparency from "@/components/Transparency";
import Platform from "@/components/Platform";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <ROI />
        <Benefits />
        <Transparency />
        <Platform />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
