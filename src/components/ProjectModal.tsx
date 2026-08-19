"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export type Project = {
  name: string;
  tech: string;
  description: string;
  details?: string[];
};

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card w-full max-w-lg border-indigo-400/20 bg-[#0f1526] p-6 shadow-2xl shadow-indigo-500/20 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-slate-100">{project.name}</h3>
          <button
            onClick={onClose}
            aria-label="Close details"
            className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mt-2 text-xs font-medium text-indigo-300/80">
          {project.tech}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {project.details && (
          <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
            {project.details.map((detail) => (
              <li
                key={detail}
                className="flex gap-2 text-sm leading-relaxed text-slate-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
