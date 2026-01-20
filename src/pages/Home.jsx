import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1d]">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <Footer />
    </div>
  );
}
