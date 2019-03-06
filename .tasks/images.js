const config = require('./_config.json');
const gulp = require('gulp');


config.img = {
	src: './src/img/**/*',
}


module.exports = function() {
	return gulp.src(config.img.src)
		.pipe(gulp.dest(config.assets));
}
