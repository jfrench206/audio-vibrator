import Tone from 'tone';
import keys from './keys';

var voices = 3; //set number of oscillators
var pitchRef = 110; //set root pitch in Hz
var oscs = [];

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

export default oscs;
export {voices, pitchRef, playSound, stopSound, pitchUp, pitchDown, microPitchUp, microPitchDown};