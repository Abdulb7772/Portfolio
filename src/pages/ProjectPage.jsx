import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/projects/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1d] text-white">
      <Navbar />
      <main className="pt-28 container mx-auto px-6">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
