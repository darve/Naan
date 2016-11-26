
var SerialPort = require('serialport'),
	port = new SerialPort('/dev/ttyUSB0'),
	fs = require('fs'),
	file = String(fs.readFileSync('./files/output.hpgl')),
	interval;
 
file = file.split(';');

function draw(v) {
	port.write(v, function(err) {
		console.log('err', err);
	});
};

port.on('open', function() {

interval = setInterval(function() {
	
	if ( file.length ) {
		var temp = file.shift();
		draw(temp);
	} else {
		clearInterval(interval);
	}
	
}, 300);

//   port.write(file, function(err) {
//     if (err) {
//       return console.log('Error on write: ', err.message);
//     }
//     console.log('message written');
//   });
});
 
// open errors will be emitted as an error event 
port.on('error', function(err) {
  console.log('Error: ', err.message);
})