import * as Audio from './audio';

var keys = [];

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
			Audio.playSound(k);
		} else if (k === 'ArrowDown'){
			Audio.pitchDown();
		} else if (k === 'ArrowLeft'){
			Audio.microPitchDown();
		} else if (k === 'ArrowUp'){
			Audio.pitchUp();
		} else if (k === 'ArrowRight'){
			Audio.microPitchUp();
		} 
	}
}

function keyUp(e){
	var k = e.key || e.keyCode; //cross-browser compatibility

	var keyLoc = keys.indexOf(k);
	// if key is in keys array, and releases, remove it from keys array
	if (keyLoc !== -1) {
		keys.splice(keyLoc, 1);
		Audio.stopSound(k);
	}
	// console.log(keys);
}

export default keys;
export {keyUp, keyDown};