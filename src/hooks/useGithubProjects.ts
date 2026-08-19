"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

type GithubApiRepo = Repo & { fork: boolean };

type Options = {
  per_page?: number;
  includeForks?: boolean;
  token?: string;
};

export default function useGithubProjects(
  username: string,
  options: Options = {}
) {
  const { per_page = 30, includeForks = false, token } = options;
  const [projects, setProjects] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const headers = token ? { Authorization: `token ${token}` } : {};
      const res = await axios.get<GithubApiRepo[]>(
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
      const mapped: Repo[] = filtered.map((r) => ({
        id: r.id,
        name: r.name,
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
      if (axios.isAxiosError(err) && err.response?.status === 403) {
        setError("GitHub API rate limit reached. Try again later.");
      } else {
        setError(err instanceof Error ? err.message : "Network error");
      }
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }, [username, per_page, includeForks, token]);

  // ponytail: fetch-on-mount effect; rule disabled because data fetching
  // needs the synchronous setLoading(true) before the async call
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProjects();
  }, [fetchProjects]);

  return { projects, loading, error, refetch: fetchProjects };
}