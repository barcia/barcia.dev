import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { parseMarkdown } from "@/utils";
import { route, absoluteRoute } from "@/utils/routes";

export async function GET(context: any) {
	const notes = await getCollection("notes");

	const items = await Promise.all(
		notes.map(async (note) => ({
			title: `Note: ${note.id}`,
			pubDate: note.data.datePub,
			content: String(await parseMarkdown(note.body || "")),
			link: absoluteRoute(route("note", [{ key: ":id", value: note.id }])),
		})),
	);

	return rss({
		title: "Iván Barcia | Notes",
		description: "Developer and design notes by Iván Barcia",
		site: context.site,
		items,
		customData: `<language>en</language>`,
	});
}
