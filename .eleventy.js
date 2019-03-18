const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

module.exports = function(eleventyConfig) {
		// Plugins
		eleventyConfig.addPlugin(syntaxHighlight);
		eleventyConfig.addPlugin(pluginRss);


		// Alias
		eleventyConfig.setDataDeepMerge(true);
		eleventyConfig.setBrowserSyncConfig({
			files: "dist/assets/**/*"
		});


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


		// Collections
		eleventyConfig.addCollection('articles', collection => {
			return collection.getFilteredByGlob('src/web/articles/*.md').reverse()
		})

		eleventyConfig.addCollection('notes', collection => {
			return collection.getFilteredByGlob(['src/web/notes/*.md']).reverse()
		})


    return {
        dir: {
            input: "src/web",
						output: "dist"
        }
    };
};
