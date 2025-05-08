import { getCollection, type CollectionEntry } from "astro:content";
import { filterCollection, type FilterCollectionOptions } from "@/utils";

type GetNotesParams = {
	options?: FilterCollectionOptions;
};

type Tags = {
	tag: string;
	count: number;
	notes: CollectionEntry<"notes">[];
};

export type GetNotesResponse = {
	notes: CollectionEntry<"notes">[];
	tags: Tags[];
};

export const getNotes = async ({ options = {} }: GetNotesParams = {}): Promise<GetNotesResponse> => {
	const notes = await getCollection("notes");
	const filteredNotes = filterCollection(notes, options);

	const tagsFlat = [...new Set(filteredNotes.map((note: any) => note.data.tags).flat())];

	const tags = tagsFlat.map((tag) => {
		const taggedNotes = filteredNotes.filter((note: any) => note.data.tags.includes(tag));
		return {
			tag,
			count: taggedNotes.length,
			notes: taggedNotes,
		};
	});
	return {
		notes: filteredNotes,
		tags,
	};
};
