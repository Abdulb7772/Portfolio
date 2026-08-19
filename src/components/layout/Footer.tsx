import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  { href: "https://github.com/Abdulb7772", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/muhammad-abdul-basit-b60a90305",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:abdulb7772@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f1d]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-[11px] font-bold text-white">
            {"</>"}
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Abdul<span className="text-gradient">Basit</span>
          </span>
        </Link>

        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Muhammad Abdul Basit. All rights
          reserved.
        </p>

        <div className="flex gap-3">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:border-indigo-400/50 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/20 active:translate-y-0 active:scale-95"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}