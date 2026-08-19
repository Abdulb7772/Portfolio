import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1d]">
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}