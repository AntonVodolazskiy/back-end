var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	if (req.url=== '/') {
		console.log('Hello World');
	} if (req.url=== '/about') {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write("on about tab ")
		res.end('/about');
		console.log("Response done");
		 
	} if (req.url==='/contact'){
		fs.readFile('index.html', function(err, data){
			res.write(data);
			res.end();
		})
	} if (req.url==='/stop'){
		console.log("Server is stopped")
		server.close();
		
	}
}).listen(3000, function(){
	console.log("Server on localhost:3000");
});
