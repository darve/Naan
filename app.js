var SerialPort = require('serialport'),
	// port = new SerialPort('/dev/ttyUSB0'),
	fs = require('fs'),
	file = String(fs.readFileSync('./files/output.hpgl'));

// console.log(file);
 
port.on('open', function() {
  port.write(file, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});
 
// open errors will be emitted as an error event 
port.on('error', function(err) {
  console.log('Error: ', err.message);
})