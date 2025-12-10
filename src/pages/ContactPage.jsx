import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/contact/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1d] text-white">
      <Navbar />
      <main className="pt-28 container mx-auto px-6">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
