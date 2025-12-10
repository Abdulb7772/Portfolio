import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Hook: useGithubProjects
 * - username: GitHub username to fetch repos from (default: your username)
 * - options: { per_page, includeForks, token } (token optional, use for higher rate limits)
 *
 * Returns: { projects, loading, error, refetch }
 */
export default function useGithubProjects(
  username = "Abdulb7772",
  options = {}
) {
  const { per_page = 30, includeForks = false, token = null } = options;
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);

    try {
      const headers = token ? { Authorization: `token ${token}` } : {};
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          params: {
            per_page,
            sort: "updated",
            direction: "desc",
          },
          headers,
        }
      );

      const repos = Array.isArray(res.data) ? res.data : [];

      const filtered = includeForks ? repos : repos.filter((r) => !r.fork);

      // map to only the fields we need (helpful for rendering)
      const mapped = filtered.map((r) => ({
        id: r.id,
        name: r.name,
        full_name: r.full_name,
        description: r.description,
        html_url: r.html_url,
        homepage: r.homepage,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        updated_at: r.updated_at,
      }));

      setProjects(mapped);
    } catch (err) {
      // Better error message for rate limits / network
      if (err.response) {
        setError({
          status: err.response.status,
          message:
            err.response.status === 403
              ? "API rate limit or access denied. Consider using a token."
              : err.response.data?.message || "GitHub API error",
        });
      } else {
        setError({ message: err.message || "Network error" });
      }
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!username) {
      setProjects([]);
      setLoading(false);
      return;
    }
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, per_page, includeForks, token]);

  return { projects, loading, error, refetch: fetchProjects };
}
