const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
		eleventyConfig.setDataDeepMerge(true);

		eleventyConfig.setBrowserSyncConfig({
			files: "dist/assets/**/*"
		});


		eleventyConfig.addFilter('dateTo', (dateObj, format) => {
			if (format == 'iso') {
				return DateTime.fromJSDate(dateObj, {zone: 'utc'}).setLocale('es').toISO();
			} else {
				return DateTime.fromJSDate(dateObj, {zone: 'utc'}).setLocale('es').toFormat(format);
			}
		});



		// PLugins
		eleventyConfig.addPlugin(syntaxHighlight);

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
