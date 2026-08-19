import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/Experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#0b0f1d]">
      <Navbar />
      <main className="pt-16">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}