"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "Angular Developer",
  "Next.js Developer",
];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % ROLES.length),
      2500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block text-gradient font-semibold">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const SOCIALS = [
  { href: "https://github.com/Abdulb7772", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/muhammad-abdul-basit-b60a90305",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:abdulb7772@gmail.com", icon: Mail, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-bg flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-16 text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Open to full-stack opportunities
      </span>

      <Image
        src="/main.png"
        alt="Muhammad Abdul Basit"
        width={348}
        height={218}
        priority
        className="mt-10 w-44 rounded-2xl border border-white/10 shadow-2xl shadow-indigo-500/20 sm:w-52"
      />

      <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Hi, I&apos;m <span className="text-gradient">Muhammad Abdul Basit</span>
      </h1>

      <p className="mt-5 text-lg text-slate-300 sm:text-xl">
        A <RotatingRole /> building fast, scalable web products.
      </p>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        Full Stack Developer Intern specializing in React, Next.js, TypeScript
        and Node.js — ERP systems, online marketplaces and payment
        integrations.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
        >
          View My Work
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
        >
          Get In Touch
        </Link>
      </div>

      <div className="mt-10 flex gap-3">
        {SOCIALS.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:border-indigo-400/50 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/20 active:translate-y-0 active:scale-95"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

    </section>
  );
}