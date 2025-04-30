export type FilterCollectionOptions = {
	drafts?: boolean;
	future?: boolean;
	sortByDate?: boolean;
	limit?: number;
};

export const filterCollection = (
	collection: any[],
	options: FilterCollectionOptions = {
		drafts: false,
		future: false,
		sortByDate: true,
		limit: undefined,
	},
) => {
	let filteredCollection = [...collection];

	if (!options?.drafts || import.meta.env.PROD) {
		filteredCollection = filteredCollection.filter((item: any) => !item.data.draft);
	}

	if (!options?.future || import.meta.env.PROD) {
		filteredCollection = filteredCollection.filter((item: any) => item.data.datePub <= new Date());
	}

	if (options?.sortByDate) {
		filteredCollection = filteredCollection.sort((a: any, b: any) => {
			return b.data.datePub.getTime() - a.data.datePub.getTime();
		});
	}

	if (options?.limit) {
		filteredCollection = filteredCollection.slice(0, options.limit);
	}

	return filteredCollection;
};
