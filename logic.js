(function(){ // begin scoping function
	var oscs = {};
	var keys = [];
	var deadZone = 0;

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


	function pitchAdjust(value){
		console.log(value);
	}

	function keyDown(e){
		// if key hasn't been pressed, add it to keys array
		if (keys.indexOf(e.key) === -1){
			keys.push(e.key);
		}
		// console.log(keys);
	}

	function keyUp(e){
		var keyLoc = keys.indexOf(e.key);
		// if key is in keys array, and releases, remove it from keys array
		if (keyLoc !== -1) {
			keys.splice(keyLoc, 1);
		}
		// console.log(keys);
	}
})(); // end scoping function