import * as Audio from './audio';

var keys = [];

function keyDown(e){
	var k = e.key || e.keyCode; //cross-browser compatibility

	//regex to match modifiers
	const mods = /\bControl\b|\bShift\b|\bCapsLock\b|\bAlt\b|\bTab\b|\bEscape\b/; 
	// const arrows = /\bArrowDown\b|\bArrowLeft\b|\bArrowUp\b|\bArrowRight\b/;

	if ((!mods.test(k))&&(keys.indexOf(k)===-1)) { // if key pressed is not a modifier, and isn't already pressed
		// console.log(k);

		switch(k){
			case 'ArrowDown':
				Audio.pitchDown();
				break;
			case 'ArrowLeft':
				Audio.microPitchDown();
				break;
			case 'ArrowUp':
				Audio.pitchUp();
				break;
			case 'ArrowRight':
				Audio.microPitchUp();
				break;
			default:
				keys.push(k);
				Audio.playSound(k);
				break;
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
}

export default keys;
export {keyUp, keyDown};