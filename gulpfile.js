'use strict';

const gulp = require('gulp');

// Tasks
const css = require('./.tasks/css');
const img = require('./.tasks/images');
const js = require('./.tasks/javascript');
const create = require('./.tasks/create');
const watch = require('./.tasks/watch');

// Exports
exports.watch = watch.assets;
exports.build = gulp.parallel(css.prod, js.prod, img);
exports.create_note = create.note;
exports.create_article = create.article;
