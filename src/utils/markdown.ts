// import type { Root as HastRoot, RootContent } from "hast";
// import type { Root as MdastRoot } from "mdast";
// import type { Plugin } from "unified";

import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

// type UrlLike = URL | string;

export const parseMarkdown = async (markdown: string) => {
	return await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeSanitize)
		.use(rehypeStringify)
		.process(markdown);
};

// const rehypeAbsoluteUrls: Plugin<[UrlLike], HastRoot> = (baseUrl) => {
// 	// ... (implementation traverses HAST, updates href/src)
// 	return (tree) => {
// 		const visit = (node: RootContent | HastRoot) => {
// 			if (node.type === "element") {
// 				if (node.tagName === "a" && node.properties?.href) {
// 					node.properties.href = createUrl(node.properties.href as string, baseUrl);
// 				}
// 				// Note: A complete implementation would also handle `img[src]`, etc.
// 				if (node.tagName === "img" && node.properties?.src) {
// 					node.properties.src = createUrl(node.properties.src as string, baseUrl);
// 				}
// 			}
// 			if ("children" in node) {
// 				node.children.forEach(visit);
// 			}
// 		};
// 		visit(tree);
// 		return tree;
// 	};
// };

// // Helper to create absolute URLs
// export function createUrl(path: string, baseUrl: UrlLike): string | null {
// 	try {
// 		const fullUrl = new URL(path, baseUrl);
// 		return fullUrl.href;
// 	} catch (error) {
// 		console.error("Invalid path or base URL:", error);
// 		return null;
// 	}
// }
