import Tone from 'tone';
import keys from './keys';
import Osc from './../ui/Osc';

var voices = 6; //set number of oscillators
var pitchRef = 110; //set root pitch in Hz
var oscs = [];
var maxPitch = 998; // highest pitch in Hz
var minPitch = 20; // lowest pitch in Hz
var prevPitch = pitchRef;

// construct array of oscillators
for (var i=0; i<voices; i++){
	oscs[i] = new Tone.Synth().toMaster();
	// oh, 12th root of two...the below line makes an equal-tempered chromatic scale, because why not?
	// oscs[i].frequency.value = pitchRef*Math.pow(2,i/12);

	// the below makes a stack of perfect fifths, cos it sounds nice
	oscs[i].frequency.value = prevPitch
	prevPitch*=1.5
}

function playSound(key){
	if (!isNaN(key)){
		var keyNum = parseInt(key)-1;
		if (keyNum<voices && keyNum>-1) {
			console.log("playing osc " + key);
			oscs[keyNum].triggerAttack(oscs[keyNum].frequency.value);
		}
	}
}

function stopSound(key){
	if (!isNaN(key)){
		var keyNum = parseInt(key)-1;
		if (keyNum<voices && keyNum>-1) {
			console.log("stopping osc " + key);
			oscs[keyNum].triggerRelease(oscs[keyNum].frequency);
		}
	}
}

function pitchUp(){
	keys.forEach(function(index){
		if(oscs[index-1].frequency.value<maxPitch){
			console.log("increasing pitch");
			oscs[index-1].frequency.value+=1;
		}
	});
}

function pitchDown(){
	keys.forEach(function(index){
		if(oscs[index-1].frequency.value>minPitch){
			console.log("decreasing pitch");
			oscs[index-1].frequency.value-=1;
		}
	});
}

function microPitchUp(){
	keys.forEach(function(index){
		if(oscs[index-1].frequency.value<maxPitch){
			console.log("micro increasing pitch");
			oscs[index-1].frequency.value+=.1;
		}
	});
}

function microPitchDown(){
	keys.forEach(function(index){
		if(oscs[index-1].frequency.value>minPitch){
			console.log("micro decreasing pitch");
			oscs[index-1].frequency.value-=.1;
		}
	});
}

export default oscs;
export {voices, pitchRef, playSound, stopSound, pitchUp, pitchDown, microPitchUp, microPitchDown};