import useGithubProjects from "@/hooks/useGithubProjects";

export default function Projects() {
  const { projects, loading, error } = useGithubProjects("Abdulb7772");

  return (
    <section id="projects" className="bg-linear-to-br from-[#0a0131] via-[#1f2769] to-[#01073d] min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        {loading && <p className="text-center">Loading projects...</p>}
        {error && <p className="text-red-500 text-center">Error: {error.message}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((p) => (
            <div
              key={p.id}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gradient-to-br dark:from-[#010824] dark:via-[#141d3b] dark:to-[#010925] shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {p.description || "No description"}
              </p>

              <a
                href={p.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:text-blue-400 transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
