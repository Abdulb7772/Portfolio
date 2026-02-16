export default function Experience() {
  const experiences = [
    {
      company: "DECIMAL SOLUTIONS",
      location: "Islamabad, Pakistan",
      role: "Full-stack Developer Intern",
      period: "Dec 2025 - Continue",
      responsibilities: [
        "Refreshed and strengthened core concepts of React.js, focusing on component-based architecture and state management.",
        "Developed small-scale applications including a weather application and a to-do list, utilizing React, Tailwind CSS, and shadcn/ui for modern, responsive user interfaces.",
        "Actively contributed to the development of a blog management system using the MERN stack, gaining hands-on experience with full-stack workflows.",
        "Currently working on different web projects, implementing multiple features using Next.js typescript for the frontend,node.js in typescript for backend and MongoDB as the backend database.",
        "Gained practical exposure to RESTful APIs, database integration, and modern frontend-backend communication.",
        "Improved problem-solving skills and understanding of real-world software development practices in an agile team environment."
      ]
    },
    {
      company: "PTCL",
      location: "Islamabad, Pakistan",
      role: "Web Developer Intern",
      period: "Aug 2023 - Sep 2023",
      responsibilities: [
        "Learned web development in Angular.",
        "Collaborated with senior developers to design responsive web interfaces, test, and deploy applications.",
        "Developed basic signup and login pages (front-end) and integrated them with the home page.",
        "Wrote clean, maintainable code and performed debugging to ensure application functionality.",
        "Proactively enhanced coding skills and adopted best practices to improve development quality."
      ]
    }
  ];

  const projects = [
    { name: "Ludo", tech: "C++" },
    { name: "Flight Management System", tech: "OOP" },
    { name: "Staff Management System", tech: "OOP" },
    { name: "Online web-store", tech: "Java" },
    { name: "Data Base for Police station", tech: "MySQL" },
    { name: "Chat Bot", tech: "Python" },
    { name: "LMS", tech: "Flutter" },
    { name: "FYP => LMS", tech: "Angular + Python + SQL" },
    { name: "Weather", tech: "React.js" },
    { name: "Blog", tech: "React.js + Node.js + MongoDB" },
    { name: "Workspax", tech: "Next.js + Node.js + TypeScript + MongoDB" },
    { name: "Mini-ERP", tech: "Next.js + Node.js + TypeScript + MongoDB" }
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-6 bg-linear-to-br from-[#2618a5] via-[#5f72b1] to-[#2618a5] dark:from-[#010824] dark:via-[#141d3b] dark:to-[#010925]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                <div className="mt-2 flex flex-wrap gap-2 items-center">
                  <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {exp.role}
                  </span>
                  <span className="text-gray-500 dark:text-gray-500">•</span>
                  <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <div>
                    <span className="font-semibold">{project.name}</span>
                    <span className="text-gray-500 dark:text-gray-400"> ({project.tech})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
