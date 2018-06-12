import Tone from 'tone';
import keys from './keys';
import Osc from './../ui/Osc';

var voices = 6; //set number of oscillators
var pitchRef = 110; //set root pitch in Hz
var oscs = [];
var maxPitch = 998; // highest pitch in Hz
var minPitch = 20; // lowest pitch in Hz

// constructs array of oscillators
for (var i=0; i<voices; i++){
	oscs[i] = new Tone.Synth().toMaster();
	oscs[i].frequency.value = pitchRef*Math.pow(2,i/12); // oh, 12th root of two...this makes an equal-temperament chromatic scale, because why not?
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

function pitchUp(){
	console.log("increasing pitch");
	keys.forEach(function(index){
		if(oscs[index-1].frequency.value<maxPitch){
			oscs[index-1].frequency.value+=1;
		}
	});
}

function pitchDown(){
	console.log("decreasing pitch");
	keys.forEach(function(index){
		if(oscs[index-1].frequency.value>minPitch){
			oscs[index-1].frequency.value-=1;
		}
	});
}

function microPitchUp(){
	console.log("micro increasing pitch");
	keys.forEach(function(index){
		if(oscs[index-1].frequency.value<maxPitch){
			oscs[index-1].frequency.value+=.1;
		}
	});
}

function microPitchDown(){
	console.log("micro decreasing pitch");
	keys.forEach(function(index){
		if(oscs[index-1].frequency.value>minPitch){
			oscs[index-1].frequency.value-=.1;
		}
	});
}

export default oscs;
export {voices, pitchRef, playSound, stopSound, pitchUp, pitchDown, microPitchUp, microPitchDown};