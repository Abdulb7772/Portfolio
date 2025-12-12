import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/20 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 text-white">

        <button 
          onClick={handleHomeClick} 
          className="text-xl font-bold text-orange-400 hover:text-orange-300 transition-colors"
        >
          Portfolio
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-orange-400 text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-orange-400 text-white transition-colors">About</Link>
          <Link to="/projects" className="hover:text-orange-400 text-white transition-colors">Projects</Link>
          <Link to="/experience" className="hover:text-orange-400 text-white transition-colors">Experience</Link>
          <Link to="/contact" className="hover:text-orange-400 text-white transition-colors">Contact</Link>
          <ThemeToggle />
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white text-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white text-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white text-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full text-white bg-black/95 backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-4 py-6">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-400 text-white transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-orange-400 text-white transition-colors">About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-orange-400 text-white transition-colors">Projects</Link>
            <Link to="/experience" onClick={() => setIsOpen(false)} className="hover:text-orange-400 text-white transition-colors">Experience</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-orange-400 text-white transition-colors">Contact</Link>
            <ThemeToggle />
          </ul>
        </div>
      )}
    </nav>
  );
}
