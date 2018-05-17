import Tone from 'tone';
import React from 'react';

var pitchRef = 110; //set root pitch in Hz
var voices = 8;
var oscs = [];
var keys = [];
var deadZone = 0;

window.onload=function(){
	// construct oscillator bank
	for (var i=0; i<voices; i++){
		oscs[i] = new Tone.Synth().toMaster();
		oscs[i].frequency.value = pitchRef*Math.pow(2,i/12); // oh, 12th root of two...this makes an equal-temperament chromatic scale, because why not?
	}

	// listen for events
	var parentElem = document.querySelector("div.audio-wrapper");
	// parentElem.addEventListener("pointerdown", pointDown, false);
	// parentElem.addEventListener("pointerup", pointUp, false);
	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);
}

// function pointDown(e) {
// 	//test to make sure touch is actually in an element
// 	if (e.target.id !== ""){
// 		var clickedItem = e.target.id;
// 		e.stopPropagation();
// 		// oscs[clickedItem] = {"selected": "true"};
// 	}
// }

// function pointUp(e) {

// }

// function mouseMoved(e){
// 	var mouseY = e.clientY;
// 	console.log(mouseY);

// 	var mouseDelta = Math.abs(mouseY - e.clientY);
// 	if (mouseDelta>deadZone){
// 		pitchAdjust(mouseY);
// 	}
// }


function pitchUp(){
	console.log("increasing pitch");
	keys.forEach(function(index){
		oscs[index-1].detune.value+=20;
	});
}

function pitchDown(){
	console.log("decreasing pitch");
	keys.forEach(function(index){
		oscs[index-1].detune.value-=20;
	});
}

function microPitchUp(){
	console.log("micro increasing pitch");
	keys.forEach(function(index){
		oscs[index-1].detune.value+=3;
	});
}

function microPitchDown(){
	console.log("micro decreasing pitch");
	keys.forEach(function(index){
		oscs[index-1].detune.value-=3;
	});
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
	if (!isNaN(key)){
		var keyNum = parseInt(key)-1;
		if (keyNum<voices && keyNum>-1) {
			console.log("playing " + key);
			oscs[keyNum].triggerAttack(oscs[keyNum].frequency.value);
		}
	}
}

function stopSound(key){
	if (!isNaN(key)){
		var keyNum = parseInt(key)-1;
		if (keyNum<voices && keyNum>-1) {
			console.log("stopping " + key);
			oscs[keyNum].triggerRelease(oscs[keyNum].frequency);
		}
	}
}