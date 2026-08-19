"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectModal, { type Project } from "./ProjectModal";

const PROJECTS: Project[] = [
  {
    name: "ThinkAIWorks",
    tech: "Next.js | Node.js | TypeScript | MongoDB",
    description:
      "A SaaS workforce management platform for project tracking, task assignment, attendance management, meeting scheduling, performance monitoring and team collaboration.",
    details: [
      "Built an internal SaaS workforce management system featuring project and task management, attendance tracking, meeting scheduling, performance monitoring, and team collaboration.",
    ],
  },
  {
    name: "Teacher's Assistant",
    tech: "Next.js | Node.js | TypeScript | MongoDB",
    description:
      "A web-based academic management system that enables instructors to organize courses, manage students, record assessments and monitor performance.",
  },
  {
    name: "RiverCity Courier",
    tech: "Next.js | Node.js | TypeScript | MongoDB",
    description:
      "A courier delivery management platform for shipment tracking, order management, dispatch operations and secure user authentication.",
    details: [
      "Developed for an external client, covering order tracking, dispatch, and delivery workflows.",
    ],
  },
  {
    name: "Shozani",
    tech: "Next.js | Node.js | TypeScript | MongoDB",
    description:
      "A study abroad platform for exploring international education opportunities, managing applications and connecting students with global institutions.",
  },
  {
    name: "Workspax",
    tech: "Next.js | Node.js | TypeScript | MongoDB",
    description:
      "A SaaS-style workspace platform for managing projects, tasks and team collaboration with a modern full-stack architecture.",
  },
  {
    name: "Mini-ERP",
    tech: "Next.js | Node.js | TypeScript | MongoDB",
    description:
      "A lightweight enterprise resource planning system for managing inventory, operations and business workflows.",
  },
  {
    name: "Blog Platform",
    tech: "React | Node.js | MongoDB",
    description:
      "A full-featured blogging platform with content creation, editing and management built on the MERN stack.",
  },
  {
    name: "LMS (Final Year Project)",
    tech: "Angular | Python | MySQL",
    description:
      "A learning management system supporting course delivery, student tracking and content management for academic institutions.",
  },
  {
    name: "LMS Mobile App",
    tech: "Flutter",
    description:
      "A cross-platform mobile companion app giving students on-the-go access to courses and progress.",
  },
  {
    name: "Weather App",
    tech: "React.js",
    description:
      "A real-time weather forecasting app with location-based search and a clean, responsive interface.",
  },
  {
    name: "ChatBot",
    tech: "Python",
    description: "A conversational chatbot for automated, rule-based user interactions.",
  },
  {
    name: "Flight Management System",
    tech: "C++ (OOP)",
    description:
      "A desktop application for managing flight bookings, schedules and passenger records using object-oriented design.",
  },
  {
    name: "Police Station Database",
    tech: "MySQL",
    description:
      "A relational database system for managing police station records, case tracking and personnel data.",
  },
  {
    name: "E-store",
    tech: "React | Node.js | MongoDB",
    description:
      "A full-stack e-commerce application with product listings, cart and order management on the MERN stack.",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-bg px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Things I&apos;ve <span className="text-gradient">built</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              onClick={() => setSelected(project)}
              className="group card flex cursor-pointer flex-col p-6 transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-100 transition-colors group-hover:text-indigo-300">
                  {project.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300"
                />
              </div>

              <p className="mt-2 text-xs font-medium text-indigo-300/80">
                {project.tech}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}