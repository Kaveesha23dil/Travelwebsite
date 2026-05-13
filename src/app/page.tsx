import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TourSection from "@/components/TourSection";
import ExploreSection from "@/components/ExploreSection";
import Destinations from "@/components/Destinations";
import HowItWorks from "@/components/HowItWorks";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TourSection />
      <ExploreSection />
      <Destinations />
      <HowItWorks />
      <Experience />
      <Footer />
    </main>
  );
}
