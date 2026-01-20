import Navbar from "@/components/layout/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/layout/Footer";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Experience />
      </div>
      <Footer />
    </>
  );
}
