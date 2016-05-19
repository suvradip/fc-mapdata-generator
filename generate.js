/**
 * @description - To generate map-navigation-data as JSON format from CSV file.
 * @param {String} inputfilename - provided by commandline arguments
 * @param {String} outputfilename - provided by commandline arguments
 * @require - npm package csv-array(https://www.npmjs.com/package/csv-array)
*/

var fs = require('fs'),
		csv = require('csv-array'),
		// input file name
		inputfilename = process.argv[2],
		// output file name
		outputfilename = process.argv[3];

csv.parseCSV(inputfilename, function(data){
 	var mapdata = {'mapdata' : data};
 	fs.writeFileSync(outputfilename, JSON.stringify(mapdata), 'utf8');
});