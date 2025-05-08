import { ROUTES } from "@/site.config";

export const route = (
	path: keyof typeof ROUTES,
	params?: Array<{ key: string; value: string }>,
	urlExtras?: Array<string>,
) => {
	let route = ROUTES[path as keyof typeof ROUTES] as string;

	if (params) {
		params.forEach((param) => {
			route = route.replace(param.key, param.value);
		});
	}

	if (urlExtras) {
		urlExtras.forEach((extra) => {
			route = route.concat(extra);
		});
	}

	return route;
};

export const absoluteRoute = (path: string) => {
	const url = new URL(path, import.meta.env.SITE);
	return url.href;
};
