module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
		eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

		eleventyConfig.setBrowserSyncConfig({
			files: "dist/assets/**/*"
		});

    return {
        dir: {
            input: "src/web",
            output: "dist"
        }
    };
};
