import React from 'react';
import ReactDOM from 'react-dom';
import * as Keys from './../imports/api/keys';
import Touch from './../imports/api/touch';
import App from './../imports/ui/App';

ReactDOM.render(<App/>, document.getElementById('app'));

window.onload=function(){
	// listen for events
	var parentElem = document.querySelector("div.audio-wrapper");
	// parentElem.addEventListener("pointerdown", pointDown, false);
	// parentElem.addEventListener("pointerup", pointUp, false);
	document.addEventListener("keydown", Keys.keyDown, false);
	document.addEventListener("keyup", Keys.keyUp, false);
}