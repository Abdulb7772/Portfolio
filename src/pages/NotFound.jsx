import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#0b0f1d] text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 opacity-70">Page not found</p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-500 text-black rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}
