var fs = require('fs');
var http = require('http');

function getSize(){
	var stats = fs.statSync("demo.txt");
	return fileSizeMb = Math.floor(stats.size / 1000000.0);

};

http.createServer(function(req, res){
 	
 	if((req.url === "/stream") || (getSize('demo.txt') > 10)) {
		
		var stream = fs.createReadStream('demo.txt');
		stream.pipe(res);
		console.log('stream');
		
 		};

	 if(req.url === "/file") {	
 		
 		fs.readFile('demo.txt', function (err, data) {
 		res.write(data);
 		console.log('file');
 		res.end();
  	})};

}).listen(3000, function() {
	console.log('Server on localhost:3000');
}); 
	
