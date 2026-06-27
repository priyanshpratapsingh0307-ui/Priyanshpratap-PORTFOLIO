import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Services } from "@/components/portfolio/Services";
import { About } from "@/components/portfolio/About";
import { TechStack } from "@/components/portfolio/TechStack";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <TechStack />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
