export const siteConfig = {
	name: "Drivebase",
	url: "https://drivebase.io",
	title: "Drivebase",
	description: "A desktop-class file manager for local, cloud, and object storage.",
	version: "v4.0",
	releaseNote: "Introducing DriveOS",
	githubRepo: import.meta.env.PUBLIC_GITHUB_REPO || "drivebase/drivebase",
	installCommand: "curl -fsSL https://drivebase.io/install | bash",
	seo: {
		locale: "en_US",
		image: "/og.png",
		twitterCard: "summary_large_image",
	},
};

export const githubUrl = `https://github.com/${siteConfig.githubRepo}`;
