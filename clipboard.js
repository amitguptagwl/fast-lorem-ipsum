var execute   = require('child_process').exec;
var statement = '';

exports.copy = function(text,onErr) {
	statement = 'echo "' + text + '" | ';

	switch (process.platform) {
		case 'darwin':
			statement = statement + 'pbcopy';
			break;
		case 'win32':
			statement = statement + 'clip';
			break;
		case 'linux':
		default:
			statement = statement + 'xclip -selection clipboard';
	}

	execute(statement, function(err, stdout, stderr) {
		if (err && onErr) {
			onErr(err);
		}
	});
};

