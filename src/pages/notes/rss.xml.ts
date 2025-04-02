import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { parseMarkdown } from "@/utils";
import { ROUTES } from "@/assets/constants";

export async function GET(context: any) {
	const notes = await getCollection("notes");

	const items = await Promise.all(
		notes.map(async (note) => ({
			title: `Note: ${note.id}`,
			pubDate: note.data.datePub,
			content: String(await parseMarkdown(note.body || "")),
			link: `${ROUTES.note.replace(":id", note.id)}`,
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
