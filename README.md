
# Naan

A simple Node.js app that converts vector artwork to HPGL and then sends it to a plotter / vinyl cutter via USB serial.

### Usage

1. Export your Illustrator file to EPS format and save it inside the `/input` folder here with the name `input.eps`. 
2. Run `npm run plot` and it will convert your file to HPGL, save it to the `/output` folder and then send the HPGL commands to your plotter. 

### Dependencies

You will need to have `pstoedit` (homebrew version definitely works) installed, along with `hpgl-distiller` [http://pldaniels.com/hpgl-distiller/](http://pldaniels.com/hpgl-distiller/) in order for this task to run correctly.

### Configuration

By default the script assumes that your plotter resides at `/dev/ttyUSB0` and has a baud rate of `38400`. These options can be changed by editing them at the top of `app.js`.