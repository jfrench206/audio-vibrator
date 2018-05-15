import Tone from 'tone';

var voices = 8;
var synth = new Tone.PolySynth(voices, Tone.Synth).toMaster();
// synth.oscillator.type = "sine";

var oscs = [
	{freq: 440, detune: 0}, 
	{freq: 660, detune: 0}, 
	{freq: 1485, detune: 0}, 
	{freq: 2227.5, detune: 0}, 
	{freq: 3341.25, detune: 0}, 
	{freq: 5011.875, detune: 0}, 
	{freq: 7517.8125, detune: 0}, 
	{freq: 11276.71875, detune: 0}
];	
var keys = [];
var deadZone = 0;

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
	synth.detune.value+=20;
}

function pitchDown(value){
	console.log("decreasing pitch");
	synth.detune.value-=20;
}

function microPitchUp(value){
	console.log("micro increasing pitch");
	synth.detune.value+=3;
}

function microPitchDown(value){
	console.log("micro decreasing pitch");
	synth.detune.value-=3;
}

function keyDown(e){
	var k = e.key || e.keyCode; //cross-browser compatibility

	//regex to match modifiers & arrow keys
	var mods = /\bControl\b|\bShift\b|\bCapsLock\b|\bAlt\b|\bTab\b|\bEscape\b/; 
	var arrows = /\bArrowDown\b|\bArrowLeft\b|\bArrowUp\b|\bArrowRight\b/;

	if (!mods.test(k)){ // if key pressed is not a modifier
		// console.log(k);
		
		// if key hasn't been pressed (and isn't an arrow key), add it to keys array
		if ((keys.indexOf(k) === -1)&&(!arrows.test(k))){ 
			// console.log("adding key to array and playing sound")
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
	console.log("playing " + key);
	if (!isNaN(key)){
		var keyNum = parseInt(key);
		console.log(keyNum);
		if ((keyNum>0) && (keyNum-1<voices)) {

			synth.triggerAttack(oscs[keyNum-1].freq);
		}
	}
}

function stopSound(key){
	console.log("stopping " + key);
	if (!isNaN(key)){
		var keyNum = parseInt(key);
		console.log(keyNum);
		synth.triggerRelease(oscs[keyNum-1].freq);
	}
}