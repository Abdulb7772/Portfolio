"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "abdulb7772@gmail.com",
    href: "mailto:abdulb7772@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Abdulb7772",
    href: "https://github.com/Abdulb7772",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muhammad Abdul Basit",
    href: "https://linkedin.com/in/muhammad-abdul-basit-b60a90305",
  },
  { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-indigo-400/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_zgxvlu2",
        "template_1xxfasg",
        form.current,
        "PI7TlN8Gg5_A7nF-6"
      )
      .then(
        () => {
          setSubmitStatus("success");
          setIsSubmitting(false);
          form.current?.reset();
        },
        () => {
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="section-bg px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s build something{" "}
            <span className="text-gradient">together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            Have a project in mind or just want to say hi? My inbox is always
            open — I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-500/10 text-indigo-300">
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {label}
                    </p>
                    <p className="truncate text-sm font-medium text-slate-200">
                      {value}
                    </p>
                  </div>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 p-4 transition-colors hover:border-indigo-400/40"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="card flex items-center gap-4 p-4">
                  {inner}
                </div>
              );
            })}
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="card space-y-4 p-6 md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className={inputClass}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className={inputClass}
            />

            {submitStatus === "success" && (
              <p className="text-sm text-emerald-400">
                Message sent successfully — thank you!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-sm text-red-400">
                Failed to send message. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}