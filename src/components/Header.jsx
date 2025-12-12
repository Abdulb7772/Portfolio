import ThemeToggle from './ThemeToggle';
import { useEffect } from 'react';

export default function Header() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    // Handle hash navigation on page load
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            setTimeout(() => scrollTo(hash), 100);
        }
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/90 dark:bg-slate-600/90 shadow-md z-50">
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            
            <h1 className="font-bold text-xl">My Portfolio</h1>

                <nav className="flex items-center gap-6">
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }} className="hover:text-blue-300 text-white transition-colors">Home</a>
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }} className="hover:text-blue-300 text-white transition-colors">About</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }} className="hover:text-blue-300 text-white transition-colors">Projects</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="hover:text-blue-300 text-white transition-colors">Contact</a>
                </nav>

                <ThemeToggle />
            </div>
        </header>
    );
}