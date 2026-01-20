import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Angular", 
  "Tailwind CSS", "TypeScript", "Git", "Responsive Design", "UI/UX"
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-linear-to-br from-[#060131] via-[#212f5e] to-[#010225]">
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image/Visual */}
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            > */}
            <div>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-blue-500/5 rounded-2xl" />
                <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-linear-to-br from-blue-500/10 to-transparent flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              </div>
              </div>
            {/* </motion.div> */}

            {/* Content */}
            <motion.div
            //   initial={{ opacity: 0, x: 50 }}
            //   animate={isInView ? { opacity: 1, x: 0 } : {}}
            //   transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-linear-to-br dark:from-[#010824] dark:via-[#141d3b] dark:to-[#010925] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg"
            >
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Building digital experiences that{" "}
                <span className="text-blue-600 dark:text-blue-400">matter</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                <p>
                  I am an enthusiastic and motivated web developer with strong skills in HTML, CSS, JavaScript, 
                  and frameworks like Angular/React. Passionate about building responsive, user-friendly, and 
                  visually appealing applications.
                </p>
                <p>
                  I aim to gain hands-on industry experience and contribute to real-world projects. 
                  Dedicated to growing as a proficient front-end developer, adaptable, quick to learn, 
                  and committed to delivering quality results within deadlines.
                </p>
              </div>

              {/* Skills */}
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Technologies I work with:
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
