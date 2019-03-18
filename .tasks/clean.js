const contig = require('./paths.json');
const shell = require('shelljs');


module.exports = function(done) {
	shell.rm('-rf', contig.dist + '*');
	done();
}
