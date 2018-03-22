var oscs = {};
var keys = [];
var deadZone = 0;

var osc = T("sin", {freq:440, mul:0.5});

// env.play();

// audioSequence.start(); // Start the Sequence

// interval.stop(); // Stop the interval
// audioSequence.stop();  // Stop the Sequence
// interval.start(); // Restart the Interval
// audioSequence.start();  // Restart the Sequence

window.onload=function(){
	// listen for events
	var parentElem = document.querySelector("div.audio-wrapper");
	// parentElem.addEventListener("pointerdown", pointDown, false);
	// parentElem.addEventListener("pointerup", pointUp, false);
	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);
}

function pointDown(e) {
	//test to make sure touch is actually in an element
	if (e.target.id !== ""){
		var clickedItem = e.target.id;
		e.stopPropagation();
		// oscs[clickedItem] = {"selected": "true"};
	}
}

function pointUp(e) {

}

function mouseMoved(e){
	var mouseY = e.clientY;
	console.log(mouseY);

	// var mouseDelta = Math.abs(mouseY - e.clientY);
	// if (mouseDelta>deadZone){
	// 	pitchAdjust(mouseY);
	// }
}


function pitchUp(value){
	console.log("increasing pitch");
	osc.freq.value++;
}

function pitchDown(value){
	console.log("decreasing pitch");
	osc.freq.value--;
}

function microPitchUp(value){
	console.log("micro increasing pitch");
	osc.freq.value = osc.freq.value + 0.2;
}

function microPitchDown(value){
	console.log("micro decreasing pitch");
	osc.freq.value = osc.freq.value - 0.2;
}

function keyDown(e){
	var k = e.key || e.keyCode; //cross-browser compatibility

	//regex to match modifiers & arrow keys
	var re = /\bControl\b|\bShift\b|\bCapsLock\b|\bAlt\b|\bTab\b|\bEscape\b|\ArrowDown\b|\ArrowLeft\b|\ArrowUp\b|\ArrowRight\b/; 

	if (!re.test(k)){ // if key pressed is not a modifier
		console.log(k);
		
		// if key hasn't been pressed, add it to keys array
		if (keys.indexOf(k) === -1){ 
			console.log("adding key to array and playing sound")
			keys.push(k);
			playSound(k);
		} else if (k === 'ArrowDown'){
			pitchDown();
		} else if (k === 'ArrowLeft'){
			microPitchDown();
		} else if (k === 'ArrowUp'){
			pitchUp();
		} else if (k === 'ArrowRight'){
			microPitchUp();
		} 
	}
}

function keyUp(e){
	var k = e.key || e.keyCode; //cross-browser compatibility

	var keyLoc = keys.indexOf(k);
	// if key is in keys array, and releases, remove it from keys array
	if (keyLoc !== -1) {
		keys.splice(keyLoc, 1);
		stopSound(k);
	}
	// console.log(keys);
}

function playSound(key){
	// console.log("playing " + key);
	osc.play();

}

function stopSound(key){
	// console.log("stopping " + key);
	osc.pause();
}