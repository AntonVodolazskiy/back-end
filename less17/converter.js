const fs = require('fs');
var request = require('request');
var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

request(url, function(err, res, body) {
	fs.writeFileSync("index.json", body); //bug
});
var arr = fs.readFileSync("index.json");
var rates = JSON.parse(arr);  

var Converter = function() {
	this.rateUs = rates[0].buy;
};

Converter.prototype.roundTwoDecimals = function (amount) {
	return Math.round(amount * 100) / 100;
};

Converter.prototype.convertToUa = function (currency) {
	return this.roundTwoDecimals(currency * this.rateUs);
};

Converter.prototype.convertToUs = function (currency) {
	return this.roundTwoDecimals(currency / this.rateUs);
};

module.exports = Converter;
