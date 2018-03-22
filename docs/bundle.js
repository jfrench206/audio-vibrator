/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var oscs = {};
var keys = [];
var deadZone = 0;

var osc = T("sin", {freq:440, mul:0.5});

// env.play();

// audioSequence.start(); // Start the Sequence

// interval.stop(); // Stop the interval
// audioSequence.stop();  // Stop the Sequence
// interval.start(); // Restart the Interval
// audioSequence.start();  // Restart the Sequence

window.onload=function(){
	// listen for events
	var parentElem = document.querySelector("div.audio-wrapper");
	// parentElem.addEventListener("pointerdown", pointDown, false);
	// parentElem.addEventListener("pointerup", pointUp, false);
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


function pitchUp(value){
	console.log("increasing pitch");
	osc.freq.value++;
}

function pitchDown(value){
	console.log("decreasing pitch");
	osc.freq.value--;
}

function microPitchUp(value){
	console.log("micro increasing pitch");
	osc.freq.value = osc.freq.value + 0.2;
}

function microPitchDown(value){
	console.log("micro decreasing pitch");
	osc.freq.value = osc.freq.value - 0.2;
}

function keyDown(e){
	var k = e.key || e.keyCode; //cross-browser compatibility

	//regex to match modifiers & arrow keys
	var mods = /\bControl\b|\bShift\b|\bCapsLock\b|\bAlt\b|\bTab\b|\bEscape\b/; 
	var arrows = /\bArrowDown\b|\bArrowLeft\b|\bArrowUp\b|\bArrowRight\b/;

	if (!mods.test(k)){ // if key pressed is not a modifier
		console.log(k);
		
		// if key hasn't been pressed (and isn't an arrow key), add it to keys array
		if ((keys.indexOf(k) === -1)&&(!arrows.test(k))){ 
			console.log("adding key to array and playing sound")
			keys.push(k);
			playSound(k);
		} else if (k === 'ArrowDown'){
			pitchDown();
		} else if (k === 'ArrowLeft'){
			microPitchDown();
		} else if (k === 'ArrowUp'){
			pitchUp();
		} else if (k === 'ArrowRight'){
			microPitchUp();
		} 
	}
}

function keyUp(e){
	var k = e.key || e.keyCode; //cross-browser compatibility

	var keyLoc = keys.indexOf(k);
	// if key is in keys array, and releases, remove it from keys array
	if (keyLoc !== -1) {
		keys.splice(keyLoc, 1);
		stopSound(k);
	}
	// console.log(keys);
}

function playSound(key){
	// console.log("playing " + key);
	osc.play();

}

function stopSound(key){
	// console.log("stopping " + key);
	osc.pause();
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGM4OWNiOWI2ZThkNDdkOTg0NGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGtCQUFrQjs7QUFFdEM7O0FBRUEseUJBQXlCOztBQUV6QixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLG9CQUFvQjtBQUNwQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQSw0RTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBLG1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRztBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYzg5Y2I5YjZlOGQ0N2Q5ODQ0YyIsInZhciBvc2NzID0ge307XG52YXIga2V5cyA9IFtdO1xudmFyIGRlYWRab25lID0gMDtcblxudmFyIG9zYyA9IFQoXCJzaW5cIiwge2ZyZXE6NDQwLCBtdWw6MC41fSk7XG5cbi8vIGVudi5wbGF5KCk7XG5cbi8vIGF1ZGlvU2VxdWVuY2Uuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIFNlcXVlbmNlXG5cbi8vIGludGVydmFsLnN0b3AoKTsgLy8gU3RvcCB0aGUgaW50ZXJ2YWxcbi8vIGF1ZGlvU2VxdWVuY2Uuc3RvcCgpOyAgLy8gU3RvcCB0aGUgU2VxdWVuY2Vcbi8vIGludGVydmFsLnN0YXJ0KCk7IC8vIFJlc3RhcnQgdGhlIEludGVydmFsXG4vLyBhdWRpb1NlcXVlbmNlLnN0YXJ0KCk7ICAvLyBSZXN0YXJ0IHRoZSBTZXF1ZW5jZVxuXG53aW5kb3cub25sb2FkPWZ1bmN0aW9uKCl7XG5cdC8vIGxpc3RlbiBmb3IgZXZlbnRzXG5cdHZhciBwYXJlbnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5hdWRpby13cmFwcGVyXCIpO1xuXHQvLyBwYXJlbnRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBwb2ludERvd24sIGZhbHNlKTtcblx0Ly8gcGFyZW50RWxlbS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHBvaW50VXAsIGZhbHNlKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93biwgZmFsc2UpO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXAsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcG9pbnREb3duKGUpIHtcblx0Ly90ZXN0IHRvIG1ha2Ugc3VyZSB0b3VjaCBpcyBhY3R1YWxseSBpbiBhbiBlbGVtZW50XG5cdGlmIChlLnRhcmdldC5pZCAhPT0gXCJcIil7XG5cdFx0dmFyIGNsaWNrZWRJdGVtID0gZS50YXJnZXQuaWQ7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQvLyBvc2NzW2NsaWNrZWRJdGVtXSA9IHtcInNlbGVjdGVkXCI6IFwidHJ1ZVwifTtcblx0fVxufVxuXG5mdW5jdGlvbiBwb2ludFVwKGUpIHtcblxufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVkKGUpe1xuXHR2YXIgbW91c2VZID0gZS5jbGllbnRZO1xuXHRjb25zb2xlLmxvZyhtb3VzZVkpO1xuXG5cdC8vIHZhciBtb3VzZURlbHRhID0gTWF0aC5hYnMobW91c2VZIC0gZS5jbGllbnRZKTtcblx0Ly8gaWYgKG1vdXNlRGVsdGE+ZGVhZFpvbmUpe1xuXHQvLyBcdHBpdGNoQWRqdXN0KG1vdXNlWSk7XG5cdC8vIH1cbn1cblxuXG5mdW5jdGlvbiBwaXRjaFVwKHZhbHVlKXtcblx0Y29uc29sZS5sb2coXCJpbmNyZWFzaW5nIHBpdGNoXCIpO1xuXHRvc2MuZnJlcS52YWx1ZSsrO1xufVxuXG5mdW5jdGlvbiBwaXRjaERvd24odmFsdWUpe1xuXHRjb25zb2xlLmxvZyhcImRlY3JlYXNpbmcgcGl0Y2hcIik7XG5cdG9zYy5mcmVxLnZhbHVlLS07XG59XG5cbmZ1bmN0aW9uIG1pY3JvUGl0Y2hVcCh2YWx1ZSl7XG5cdGNvbnNvbGUubG9nKFwibWljcm8gaW5jcmVhc2luZyBwaXRjaFwiKTtcblx0b3NjLmZyZXEudmFsdWUgPSBvc2MuZnJlcS52YWx1ZSArIDAuMjtcbn1cblxuZnVuY3Rpb24gbWljcm9QaXRjaERvd24odmFsdWUpe1xuXHRjb25zb2xlLmxvZyhcIm1pY3JvIGRlY3JlYXNpbmcgcGl0Y2hcIik7XG5cdG9zYy5mcmVxLnZhbHVlID0gb3NjLmZyZXEudmFsdWUgLSAwLjI7XG59XG5cbmZ1bmN0aW9uIGtleURvd24oZSl7XG5cdHZhciBrID0gZS5rZXkgfHwgZS5rZXlDb2RlOyAvL2Nyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eVxuXG5cdC8vcmVnZXggdG8gbWF0Y2ggbW9kaWZpZXJzICYgYXJyb3cga2V5c1xuXHR2YXIgbW9kcyA9IC9cXGJDb250cm9sXFxifFxcYlNoaWZ0XFxifFxcYkNhcHNMb2NrXFxifFxcYkFsdFxcYnxcXGJUYWJcXGJ8XFxiRXNjYXBlXFxiLzsgXG5cdHZhciBhcnJvd3MgPSAvXFxiQXJyb3dEb3duXFxifFxcYkFycm93TGVmdFxcYnxcXGJBcnJvd1VwXFxifFxcYkFycm93UmlnaHRcXGIvO1xuXG5cdGlmICghbW9kcy50ZXN0KGspKXsgLy8gaWYga2V5IHByZXNzZWQgaXMgbm90IGEgbW9kaWZpZXJcblx0XHRjb25zb2xlLmxvZyhrKTtcblx0XHRcblx0XHQvLyBpZiBrZXkgaGFzbid0IGJlZW4gcHJlc3NlZCAoYW5kIGlzbid0IGFuIGFycm93IGtleSksIGFkZCBpdCB0byBrZXlzIGFycmF5XG5cdFx0aWYgKChrZXlzLmluZGV4T2YoaykgPT09IC0xKSYmKCFhcnJvd3MudGVzdChrKSkpeyBcblx0XHRcdGNvbnNvbGUubG9nKFwiYWRkaW5nIGtleSB0byBhcnJheSBhbmQgcGxheWluZyBzb3VuZFwiKVxuXHRcdFx0a2V5cy5wdXNoKGspO1xuXHRcdFx0cGxheVNvdW5kKGspO1xuXHRcdH0gZWxzZSBpZiAoayA9PT0gJ0Fycm93RG93bicpe1xuXHRcdFx0cGl0Y2hEb3duKCk7XG5cdFx0fSBlbHNlIGlmIChrID09PSAnQXJyb3dMZWZ0Jyl7XG5cdFx0XHRtaWNyb1BpdGNoRG93bigpO1xuXHRcdH0gZWxzZSBpZiAoayA9PT0gJ0Fycm93VXAnKXtcblx0XHRcdHBpdGNoVXAoKTtcblx0XHR9IGVsc2UgaWYgKGsgPT09ICdBcnJvd1JpZ2h0Jyl7XG5cdFx0XHRtaWNyb1BpdGNoVXAoKTtcblx0XHR9IFxuXHR9XG59XG5cbmZ1bmN0aW9uIGtleVVwKGUpe1xuXHR2YXIgayA9IGUua2V5IHx8IGUua2V5Q29kZTsgLy9jcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHlcblxuXHR2YXIga2V5TG9jID0ga2V5cy5pbmRleE9mKGspO1xuXHQvLyBpZiBrZXkgaXMgaW4ga2V5cyBhcnJheSwgYW5kIHJlbGVhc2VzLCByZW1vdmUgaXQgZnJvbSBrZXlzIGFycmF5XG5cdGlmIChrZXlMb2MgIT09IC0xKSB7XG5cdFx0a2V5cy5zcGxpY2Uoa2V5TG9jLCAxKTtcblx0XHRzdG9wU291bmQoayk7XG5cdH1cblx0Ly8gY29uc29sZS5sb2coa2V5cyk7XG59XG5cbmZ1bmN0aW9uIHBsYXlTb3VuZChrZXkpe1xuXHQvLyBjb25zb2xlLmxvZyhcInBsYXlpbmcgXCIgKyBrZXkpO1xuXHRvc2MucGxheSgpO1xuXG59XG5cbmZ1bmN0aW9uIHN0b3BTb3VuZChrZXkpe1xuXHQvLyBjb25zb2xlLmxvZyhcInN0b3BwaW5nIFwiICsga2V5KTtcblx0b3NjLnBhdXNlKCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==