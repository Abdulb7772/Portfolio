import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1d]">
      <Navbar />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}