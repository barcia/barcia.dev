const config = require('./paths.json');
const fs = require('fs');
const { DateTime } = require("luxon");
const generate = require('nanoid/generate');
const alphabet = "123456789abcdefghijklmnpqrstuvwxyz";


module.exports = {
	note: function(done) {
		const uid = generate(alphabet, 8);
		const date = DateTime.local();
		const frontMatter = `---
date: ${date.toISO()}
---`;

		fs.writeFile(`${config.notes}${date.toISODate()}-${uid}.md`, frontMatter, function (err) {
			if (err) throw err;
			console.log(`Note with UID: ${uid} was created successfully.`);
		});
		done();
	},
	article: function(done) {
		const date = DateTime.local();
		const frontMatter = `---
title:
date: ${date.toISO()}
tags: [""]
---`;

	fs.writeFile(`${config.articles}${date.toISODate()}-TITLE.md`, frontMatter, function (err) {
		if (err) throw err;
		console.log(`Article was created successfully.`);
	});
	done();
	}
}
