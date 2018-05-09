var Converter = function (baseCurrencyUs) {
	this.baseCurrencyUs = baseCurrencyUs;
};

Converter.prototype.roundTwoDecimals = function (amount) {
	return Math.round(amount * 100) / 100;
};

Converter.prototype.convertToUa = function (currency) {
	return this.roundTwoDecimals(currency * this.baseCurrencyUs);
};

Converter.prototype.convertToUs = function (currency) {
	return this.roundTwoDecimals(currency / this.baseCurrencyUs);
};

module.exports = Converter;