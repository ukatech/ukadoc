fs = require 'fs'
path = require 'path'
dir = process.argv[2]
tdir = process.argv[3]
unless dir and tdir
	console.log 'Usage: this in_dir out_dir'
	process.exit 0
files = fs.readdirSync dir
for file in files
	if file.match /\.html$/
		data = fs.readFileSync path.join(dir, file), 'utf8'
		if data.match /<!---{100,}-->/
			console.log file
			data = data
			.replace /^[\s\S]*?<!---{100,}-->\s*/, ''
			.replace /\s*<!---{100,}-->[\s\S]*?$/, ''
			fs.writeFileSync path.join(tdir, file), data, 'utf8'
