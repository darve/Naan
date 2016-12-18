
/**
 * Module for sending HPGL data to a plotter.
 */

'use strict';

var SerialPort = require('serialport'),
	port = new SerialPort('/dev/ttyUSB0', { baudRate: 38400 }),
	fs = require('fs'),
	file = String(fs.readFileSync('./files/' + process.argv[2])).split(';'),
	interval;

/**
 * Send data to the plotter
 */
function send_data(v) {
	port.write(v, function(err) {	
		if (err) console.log('err', err);
		return true;
	});
};

/**
 * Log out any errors.
 */
port.on('error', function(err) {

  	console.log('Error: ', err.message);

})

/**
 * Open a serial conenction to the plotter
 */
port.on('open', function() {

	interval = setInterval(function() {
		
		if ( file.length ) {
			
			// Pull the first element from the array, so we send 
			// the instructions in order.
			var temp = file.shift();
			send_data(temp);

		} else {

			// We have run out of data to send! Wahey!
			clearInterval(interval);

		}
		
	}, 300);

});
