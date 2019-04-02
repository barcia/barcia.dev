'use strict';

const gulp = require('gulp');

// Tasks
const css = require('./.tasks/css');
const img = require('./.tasks/images');
const js = require('./.tasks/javascript');
const watch = require('./.tasks/watch');

// Exports
exports.watch = watch.assets;
exports.build = gulp.parallel(css.prod, js.prod, img);
