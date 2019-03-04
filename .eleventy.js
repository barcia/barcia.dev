module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
		eleventyConfig.setDataDeepMerge(true);

		eleventyConfig.setBrowserSyncConfig({
			files: "dist/assets/**/*"
		});

		  // Get the first `n` elements of a collection.
			eleventyConfig.addFilter("last", (array, n) => {
					return array.slice(-n);
			});

    return {
        dir: {
            input: "src/web",
            output: "dist"
        }
    };
};
