// TODO:
// add audio functionality
// make a UI
// add auto-reconnect on LIBUSB_TRANSFER_ERROR
// make some kind of automap mode that takes arbitrary input and makes it usable
// clean up code - separate out functions, make it modular, etc

var usb = require("usb");
var express = require('express');
var path = require('path');
var T = require('timbre');
const app = express();

// send some data in response to HTTP GET request
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// define public directory
app.use(express.static(path.join(__dirname, 'public')));

// set up app listening
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


// USB stuff
console.log("Waiting for USB device...");

// when USB device is attached to computer
usb.on('attach', function(device) {
	console.log("Device connected: ID " + device.deviceAddress);
    openThisDevice(device);
});

// when USB device is detached from computer
usb.on('detach', function(device) {
	console.log("Device disconnected: ID " + device.deviceAddress);
});

// "claim" the USB device from the OS
function openThisDevice(device){
	device.open();
	var deviceINTF=device.interface(0);
	if (deviceINTF.isKernelDriverActive()){
    	deviceINTF.detachKernelDriver();
		deviceINTF.claim();
		console.log("Device claimed: ID " + device.deviceAddress);
		readData(device, deviceINTF);
	}
}

// finds endpoints and reads data from "in" direction endpoints
function readData(device, deviceINTF){
	var ePs = deviceINTF.endpoints;
	var epIN;

    // find endpoints that are IN direction
    for (var i = 0; i<ePs.length; i++){
     	if(ePs[i].direction=="in"){
         	epIN=ePs[i];
    	}
    }


    // USB transfer type = 2 (isochronous)
	epIN.transferType = 2;

    // start polling endpoint for data
	epIN.startPoll();

    // when this endpoint receives data, do stuff
    // contains joystick data - to be moved into external file
    epIN.on('data', function (data) {
    	// info for Nyko joystick:
    	// data[0] = L joystick X (0-255, L-R)
    	// data[1] = L joystick Y (0-255, U-D)
    	// data[2] = R joystick X (0-255, L-R)
    	// data[3] = R joystick Y (0-255, U-D)
    	// data[4] = Triangle, Circle, X, Square, L1, R1, L2, R2 (1 bit per button)
    	// data[5] = Select, Start, L joystick click, R joystick click (1 bit per button)
    	// data[6] = D-pad: no input = 136, up=0, right=34, down=68, left=102, UR=17, DR=51, DL=85, UL=119
    	// data[7] = ???

        // bitmask setup
        const mask = {
            triangle:1,
            circle:2,
            cross : 4,
            square : 8,
            l1 : 16,
            r1 : 32,
            l2 : 64,
            r2 : 128,
            select : 1,
            start : 2,
            lclick : 4,
            rclick : 8
        }

        // create joystick object -
        // uses bitmasking to determine which buttons are pressed, for method see: https://blog.rinatussenov.com/juggling-bits-in-javascript-bitmasks-128ad5f31bed
        const joystick = {
            leftX : data[0],
            leftY : data[1],
            lclick:Boolean(data[5] & mask.lclick),
            rightX : data[2],
            rightY : data[3],
            rclick:Boolean(data[5] & mask.rclick),
            buttons : {
                triangle:Boolean(data[4] & mask.triangle),
                circle:Boolean(data[4] & mask.circle),
                cross:Boolean(data[4] & mask.cross),
                square:Boolean(data[4] & mask.square),
                l1:Boolean(data[4] & mask.l1),
                r1:Boolean(data[4] & mask.r1),
                l2:Boolean(data[4] & mask.l2),
                r2:Boolean(data[4] & mask.r2),
                select:Boolean(data[5] & mask.select),
                start:Boolean(data[5] & mask.start)
            },
            dpad : data[6]
        };



        // print out all joystick data
        // console.log(joystick);

        // print out data key names
        // console.log("data keys: " + Object.getOwnPropertyNames(data));

        // print out all data received
        console.log("joystick: " + Object.values(data));


    });

    // catch errors
    epIN.on("error", function (error){
    	console.log("Error: " + error);
    });
}

// make audio go
T("sin", {freq:440}).play();