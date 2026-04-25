import { useEffect, useState } from "react";
import { githubUrl, siteConfig } from "../../../config/site";

type GithubRepoStats = {
	stars: number;
	url: string;
};

let statsPromise: Promise<GithubRepoStats> | undefined;

const fetchGithubStats = async () => {
	if (!statsPromise) {
		statsPromise = fetch(`https://api.github.com/repos/${siteConfig.githubRepo}`, {
			headers: { Accept: "application/vnd.github+json" },
		}).then(async (response) => {
			if (!response.ok) {
				throw new Error(`GitHub API request failed: ${response.status}`);
			}

			const repo = await response.json();
			return {
				stars: repo.stargazers_count,
				url: repo.html_url,
			};
		});
	}

	return statsPromise;
};

export const formatGithubStars = (stars: number) => {
	if (stars >= 1_000_000) return `${(stars / 1_000_000).toFixed(1)}M`;
	if (stars >= 10_000) return `${(stars / 1_000).toFixed(1)}k`;
	if (stars >= 1_000) return `${Math.round(stars / 100) / 10}k`;
	return String(stars);
};

export const useGithubStars = () => {
	const [stats, setStats] = useState<GithubRepoStats | null>(null);

	useEffect(() => {
		let cancelled = false;

		fetchGithubStats()
			.then((nextStats) => {
				if (!cancelled) setStats(nextStats);
			})
			.catch(() => {
				if (!cancelled) setStats(null);
			});

		return () => {
			cancelled = true;
		};
	}, []);

	return {
		stars: stats ? formatGithubStars(stats.stars) : "GitHub",
		url: stats?.url ?? githubUrl,
	};
};
