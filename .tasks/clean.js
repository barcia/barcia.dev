const config = require('./_config.json');
const del = require('del');


module.exports = function() {
	return del([config.dist + '*']);
}
