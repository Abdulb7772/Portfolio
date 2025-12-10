import useGithubProjects from "@/hooks/useGithubProjects";

export default function Projects() {
  const { projects, loading, error } = useGithubProjects("Abdulb7772");

  return (
    <section id="projects" className="bg-linear-to-br from-[#0a0131] via-[#1f2769] to-[#01073d] h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      {loading && <p>Loading projects...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 6).map((p) => (
            
          <div
            key={p.id}
            className="bg-linear-to-br from-[#010824] via-[#141d3b] to-[#010925] border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-slate-800 shadow-lg"
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {p.description || "No description"}
            </p>

            <a
              href={p.html_url}
              target="_blank"
              className="mt-4 inline-block text-blue-500"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
