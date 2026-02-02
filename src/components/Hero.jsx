import { Github, Linkedin, Mail } from "lucide-react";          

export default function Hero() {
  return (
    <section className="bg-linear-to-br from-[#2618a5] via-[#5f72b1] to-[#2618a5] dark:from-[#010824] dark:via-[#141d3b] dark:to-[#010925] min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-12"
      id="hero"
    >
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        <span className="profile-icon">
        <img src="/main.png" alt="Profile" className="icon-img"/>
        </span>
        Hi, I'm Muhammad Abdul Basit</h1>
      <p className="mt-4 text-base sm:text-lg text-gray-800 dark:text-gray-300 max-w-3xl">
        Enthusiastic web developer skilled in • HTML • CSS • JavaScript • Angular/React <br />
        passionate about building responsive, user-friendly applications 
        and growing as a Frontend Developer.
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
