import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#0b0f1d] px-4 text-center">
      <p className="text-7xl font-bold text-gradient md:text-8xl">404</p>
      <p className="mt-4 text-slate-400">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
      >
        Go Home
      </Link>
    </div>
  );
}