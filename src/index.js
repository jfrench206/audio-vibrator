import Tone from 'tone';
import React from 'react';
import * as Keys from './../imports/api/keys';
import Touch from './../imports/api/touch';

window.onload=function(){
	// listen for events
	var parentElem = document.querySelector("div.audio-wrapper");
	// parentElem.addEventListener("pointerdown", pointDown, false);
	// parentElem.addEventListener("pointerup", pointUp, false);
	document.addEventListener("keydown", Keys.keyDown, false);
	document.addEventListener("keyup", Keys.keyUp, false);
}