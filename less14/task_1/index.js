var events = require('events');
var util = require('util');


var eventLogger = function(action){
	this.action = action;
}; 

util.inherits(eventLogger, events.EventEmitter);

var signUp = new eventLogger('Sign Up');
var logIn = new eventLogger('Log In');
var logOut = new eventLogger('Log Out');

var arr = [signUp, logIn, logOut];
var offset = 0;
arr.forEach(function(event){
	event.on('log', function(){
		setTimeout(function(){
			console.log('User ' + event.action +' on: '+ new Date())
		}, 5000+offset);
		offset+=5000;
	});
	
});

signUp.emit('log');
logIn.emit('log');
logOut.emit('log');