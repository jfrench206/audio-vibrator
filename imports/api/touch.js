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

	var mouseDelta = Math.abs(mouseY - e.clientY);
	if (mouseDelta>deadZone){
		pitchAdjust(mouseY);
	}
}

export default {pointDown, pointUp, mouseMoved};