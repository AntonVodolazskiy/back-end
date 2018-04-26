/*
//classwork
var fs = require('fs');

var content = fs.readFileSync('demo.txt', 'utf8');

console.log(content);
console.log('Read done');

//homeTask#1
let fs = require('fs');
let content = 'Hello World';
fs.writeFile('demo.txt', content, function(err) {
	if(err) throw err;
	console.log('Written')
});

//homeTask2
let fs = require('fs');
fs.appendFile('demo.txt', 'Hi!\r\n', function(err) {
	if(err) throw err
}, console.log('Content appended'));

//homeTask#2.1 (through WriteStream)
let fs = require('fs');
let content = fs.createWriteStream('demo.txt');
content.write('Hello Earth');
content.write('\r\n'+'Hello World');
content.write('\r\n'+'Hello Universe');
content.end(function(){console.log('Written');})

//homeTask#3
let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'exampl@gmail.com', // your email address
    pass: 'password' //your pass
  }
});

let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'to@gmail.com', //who should get message 
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
*/
