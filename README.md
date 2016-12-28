
# Naan

A simple Node.js app for sending HPGL data to a plotter / vinyl cutter via USB serial.

### Usage

Simply run `node app.js [filename]` and it will send the HPGL commands to your plotter.

### Dependencies

You will need to ahve `pstoedit` (homebrew version definitely works) installed, along with `hpgl-distiller` [http://pldaniels.com/hpgl-distiller/](http://pldaniels.com/hpgl-distiller/) in order for this task to run correctly.

### Configuration

By default the script assumes that your plotter resides at `/dev/ttyUSB0` and has a baud rate of `38400`. These options can be changed by editing them at the top of `app.js`.