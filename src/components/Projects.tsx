"use client";

import { ArrowUpRight } from "lucide-react";
import useGithubProjects from "@/hooks/useGithubProjects";

function GithubProjects() {
  const { projects, loading, error } = useGithubProjects("Abdulb7772");

  if (loading) {
    return <p className="mt-6 text-sm text-slate-400">Loading repositories...</p>;
  }

  if (error) {
    return <p className="mt-6 text-sm text-red-400">{error}</p>;
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="group card flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/10"
        >
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-lg font-bold text-slate-100 transition-colors group-hover:text-indigo-300">
              {repo.name}
            </h4>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="mt-1 shrink-0 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300"
            />
          </div>
          <p className="mt-2 text-xs font-medium text-indigo-300/80">
            {repo.language ?? "GitHub"}
          </p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
            {repo.description ?? "No description available."}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300/80 transition-colors group-hover:text-indigo-300">
            View Repository
            <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-bg px-4 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I&apos;ve <span className="text-gradient">built</span>
          </h2>
        </div>

        <div className="mt-12">
          <h3 className="section-label">GitHub</h3>
          <GithubProjects />
        </div>
        </div>
    </section>
  );
}
