var fs = require('fs');

var ext = process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
	for (var i = 0; i < list.length - 1; i++) {
		var filename = list[i];
		if (filename.split('.')[1] == ext)
			console.log(filename);
	};
})