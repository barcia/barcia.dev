const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRSS = require("@11ty/eleventy-plugin-rss");
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});


module.exports = function(eleventyConfig) {

	// Plugins
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginRSS);


	// Config
	eleventyConfig.setDataDeepMerge(true);
	eleventyConfig.setBrowserSyncConfig({
		files: "dist/assets/**/*"
	});


	// Collections
	eleventyConfig.addCollection('articles', collection => {
		return collection.getFilteredByGlob('src/articles/*.md').reverse()
	})

	eleventyConfig.addCollection('notes', collection => {
		return collection.getFilteredByGlob(['src/notes/*.md']).reverse()
	})




		// FILTERS
		// Tranform dates
		eleventyConfig.addFilter('dateTo', (dateObj, format) => {
			if (format == 'iso') {
				return DateTime.fromJSDate(dateObj, {zone: 'utc+1'}).setLocale('es').toISO();
			} else {
				return DateTime.fromJSDate(dateObj, {zone: 'utc+1'}).setLocale('es').toFormat(format);
			}
		});

		// Get the first `n` elements of a collection.
		eleventyConfig.addFilter("last", (array, n) => {
				return array.slice(-n);
		});


		eleventyConfig.addFilter("utf8_xml", (inputStr) => {
			return inputStr.replace(/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm, '');
		});


		eleventyConfig.setLibrary('md', md);
		eleventyConfig.addFilter('markdownify', str => md.render(str));

		eleventyConfig.addPairedShortcode("textnote", require("./src/_includes/shortcodes/textnote"));



    return {
        dir: {
            input: "src",
						output: "dist"
				},
				htmlTemplateEngine : "njk",
				markdownTemplateEngine : "njk",
    };
};
