import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/20 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 text-white">

        <Link to="/" className="text-xl font-bold text-orange-400">
          Portfolio
        </Link>

        <ul className="flex items-center gap-6">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <Link to="/about" className="hover:text-orange-400">About</Link>
          <Link to="/projects" className="hover:text-orange-400">Projects</Link>
          <Link to="/experience" className="hover:text-orange-400">Experience</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact</Link>
        </ul>
      </div>
    </nav>
  );
}
