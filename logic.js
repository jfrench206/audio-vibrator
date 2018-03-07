window.onload=function(){
	// listen for events
	var parentElem = document.querySelector("div.audio-wrapper");
	parentElem.addEventListener("click", handleClick, false);
}

// do stuff
function handleClick(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert("Hello " + clickedItem);
    }
    e.stopPropagation();
}