"use client";

import { useState } from "react";
import { ArrowUpRight, Briefcase } from "lucide-react";
import ProjectModal, { type Project } from "./ProjectModal";

const EXPERIENCES = [
  {
    company: "THINKAIWORKS",
    location: "Islamabad, Pakistan",
    role: "Full Stack Developer",
    period: "May 2026 - Present",
    responsibilities: [
      "Build and ship scalable end-to-end web applications using Next.js, React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, Resend and REST APIs.",
      "Developed a courier delivery management platform covering order tracking, dispatch and delivery workflows.",
      "Built an internal SaaS workforce management system with project/task management, attendance tracking, meeting scheduling, performance monitoring and team collaboration.",
      "Used n8n to build AI-driven automation workflows and collaborated with AI/product teams to integrate AI features into products.",
    ],
  },
  {
    company: "DECIMAL SOLUTIONS",
    location: "Islamabad, Pakistan",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 - Apr 2026",
    responsibilities: [
      "Tracked tasks, bugs and development progress in Jira, identifying and fixing low-level bugs to improve system stability and performance.",
      "Built reusable React components with component-based architecture and efficient state management patterns.",
      "Developed weather and to-do applications using React, Tailwind CSS and shadcn/ui.",
      "Contributed to a MERN blog management system using Next.js, Node.js, TypeScript and MongoDB.",
    ],
  },
  {
    company: "PTCL",
    location: "Islamabad, Pakistan",
    role: "Web Developer Intern",
    period: "Aug 2023 - Sep 2023",
    responsibilities: [
      "Acquired practical web development experience using Angular, focusing on modular and scalable application design.",
      "Collaborated with senior developers to design, test and deploy responsive web interfaces, including signup and login pages.",
      "Assisted with debugging and testing to improve application performance while writing clean, maintainable code.",
    ],
  },
];

const PROJECTS: Project[] = [
  { name: "ThinkAIWorks", tech: "Next.js + Node.js + TypeScript + MongoDB", description: "A SaaS workforce management platform for project tracking, task assignment, attendance management, meeting scheduling, performance monitoring and team collaboration." },
  { name: "Teacher's Assistant", tech: "Next.js + Node.js + TypeScript + MongoDB", description: "A web-based academic management system for organizing courses, managing students, recording assessments and monitoring performance." },
  { name: "RiverCity Courier", tech: "Next.js + Node.js + TypeScript + MongoDB", description: "A courier delivery management platform for shipment tracking, order management, dispatch operations and secure user authentication." },
  { name: "Shozani", tech: "Next.js + Node.js + TypeScript + MongoDB", description: "A study abroad platform for exploring international education opportunities, managing applications and connecting students with global institutions." },
  { name: "Workspax", tech: "Next.js + Node.js + TypeScript + MongoDB", description: "A SaaS-style workspace platform for managing projects, tasks and team collaboration with a modern full-stack architecture." },
  { name: "Mini-ERP", tech: "Next.js + Node.js + TypeScript + MongoDB", description: "A lightweight enterprise resource planning system for managing inventory, operations and business workflows." },
  { name: "Blog Platform", tech: "React + Node.js + MongoDB", description: "A full-featured blogging platform with content creation, editing and management built on the MERN stack." },
  { name: "LMS (Final Year Project)", tech: "Angular + Python + MySQL", description: "A learning management system supporting course delivery, student tracking and content management for academic institutions." },
  { name: "LMS Mobile App", tech: "Flutter", description: "A cross-platform mobile companion app giving students on-the-go access to courses and progress." },
  { name: "Weather App", tech: "React.js", description: "A real-time weather forecasting app with location-based search and a clean, responsive interface." },
  { name: "ChatBot", tech: "Python", description: "A conversational chatbot for automated, rule-based user interactions." },
  { name: "Flight Management System", tech: "C++ (OOP)", description: "A desktop application for managing flight bookings, schedules and passenger records using object-oriented design." },
  { name: "Police Station Database", tech: "MySQL", description: "A relational database system for managing police station records, case tracking and personnel data." },
  { name: "E-store", tech: "React + Node.js + MongoDB", description: "A full-stack e-commerce application with product listings, cart and order management on the MERN stack." },
];

export default function Experience() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="experience" className="section-bg px-4 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I&apos;ve <span className="text-gradient">worked</span>
          </h2>
        </div>

        <div className="relative mt-14 space-y-10 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-indigo-500/60 before:via-white/10 before:to-transparent md:before:left-[19px]">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="relative pl-12 md:pl-16">
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-400/40 bg-[#0b0f1d] text-indigo-300 md:h-10 md:w-10">
                <Briefcase size={14} className="md:hidden" />
                <Briefcase size={16} className="hidden md:block" />
              </span>

              <div className="card p-6 transition-colors hover:border-white/20">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-slate-100">
                    {exp.company}
                  </h3>
                  <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-400">
                  {exp.role} · {exp.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center">
            <span className="section-label">Projects</span>
            <h2 className="section-title">
              Academic &amp; <span className="text-gradient">personal</span>{" "}
              work
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <button
                key={project.name}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="card group flex items-center gap-3 p-4 text-left transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
                aria-label={`View details for ${project.name}`}
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-200 transition-colors group-hover:text-indigo-300">
                    {project.name}
                  </p>
                  <p className="truncate text-xs text-slate-500">{project.tech}</p>
                </div>
                <ArrowUpRight size={16} aria-hidden="true" className="ml-auto shrink-0 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}