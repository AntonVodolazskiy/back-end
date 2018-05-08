var http = require('http');
var request = require('request');
var fs = require('fs');
var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

request(url, function(err, res, body) {  
		var rates = "";
		var obj = JSON.parse(body);
    	for(var i = 0; i < obj.length; i++){
    	var rate = obj[i].ccy + " Buy: " + obj[i].buy + " Sale: " + obj[i].sale;
     	str = JSON.stringify(rate).replace(/\"/g, "");
    	rates += str + "\n";
    };
				fs.writeFile("document.txt", rates, function(err) {
				if (err) throw err;
				console.log('The file has been saved');
				});
});

http.createServer(function (req, res) {
					fs.readFile("document.txt", function(err, data) {
						res.write(data);
						res.end();
					});
				}).listen(3000, function(){
					console.log('Server on localhost')
				});