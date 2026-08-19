import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1d]">
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}