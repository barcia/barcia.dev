export const absoluteUrl = (path: string) => {
	const url = new URL(path, import.meta.env.SITE);
	return url.href;
};
