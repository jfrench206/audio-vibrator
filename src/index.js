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
	parentElem.addEventListener("pointerdown", pointDown, false);
	parentElem.addEventListener("pointerup", pointUp, false);
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

function keyDown(e){
	// console.log(keys);
	if (e.key === 'ArrowDown'){
		pitchDown();
	} else if (e.key === 'ArrowUp'){
		pitchUp();
	} else if (keys.indexOf(e.key) === -1){ // if key hasn't been pressed, add it to keys array
		keys.push(e.key);
		playSound(e.key);
	}
}

function keyUp(e){
	var keyLoc = keys.indexOf(e.key);
	// if key is in keys array, and releases, remove it from keys array
	if (keyLoc !== -1) {
		keys.splice(keyLoc, 1);
		stopSound(e.key);
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