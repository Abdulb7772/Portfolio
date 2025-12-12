export default function Experience() {
  const experiences = [
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

  return (
    <section id="experience" className="min-h-screen py-24 px-6 bg-linear-to-br from-[#060131] via-[#212f5e] to-[#010225]">
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
      </div>
    </section>
  );
}
