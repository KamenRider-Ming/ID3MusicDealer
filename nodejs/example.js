var ID3fs = require('fs');
var ID3 = require("./ID3");

ID3fs.readFile("xxxx.mp3", function(err, data){
	var d = ID3.ID3fileReader(data, ["title", "picture"]);
	console.log(d);
});