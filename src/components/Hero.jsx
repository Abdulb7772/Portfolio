import { Github, Linkedin, Mail } from "lucide-react";          

export default function Hero() {
  return (
    <section className="bg-white dark:bg-linear-to-br dark:from-[#010824] dark:via-[#222e57] dark:to-[#010925] h-screen flex flex-col justify-center items-center text-center px-4"
      id="hero"
    >
      <h1 className="text-5xl font-bold mt-32 text-gray-900 dark:text-white">Hi, I'm Muhammad Abdul Basit</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Enthusiastic web developer skilled in • HTML • CSS • JavaScript • Angular/React,<br />
        passionate about building responsive, user-friendly applications<br /> 
        and growing as a Frontend Developer.<br />
      </p>

      <div className="flex gap-4 mt-15">
        <a
          href="https://github.com/Abdulb7772"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border hover:animate-bounce border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/muhammad-abdul-basit-b60a90305"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border hover:animate-bounce border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:abdulb7772@gmail.com"
          className="p-3 rounded-full border hover:animate-bounce border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>

      <p className="mt-20 animate-bounce text-gray-400">Scroll ↓</p>
    </section>
  );
}
