import Image from "next/image";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Git",
  "Responsive Design",
];

export default function About() {
  return (
    <section id="about" className="section-bg px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-2xl" />
            <div className="card relative overflow-hidden">
              <Image
                src="/main.png"
                alt="Muhammad Abdul Basit"
                width={348}
                height={218}
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl" />
          </div>

          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Building digital experiences that{" "}
              <span className="text-gradient">matter</span>
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-slate-400">
              <p>
                I am an enthusiastic and motivated web developer with strong
                skills in HTML, CSS, JavaScript, and frameworks like React and
                Angular. Passionate about building responsive, user-friendly,
                and visually appealing applications.
              </p>
              <p>
                I aim to gain hands-on industry experience and contribute to
                real-world projects. Dedicated to growing as a proficient
                full-stack developer, adaptable, quick to learn, and committed
                to delivering quality results within deadlines.
              </p>
            </div>

            <p className="mt-8 text-sm font-medium text-slate-300">
              Technologies I work with
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-indigo-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}