import React from 'react';
import Osc from './Osc';
import keys, * as Keys from './../api/keys';
import oscs, * as Audio from './../api/audio';

function Oscs(props){
	// generate oscillator components based on underlying array
	const oscList = oscs.map((osc,i) => 
		<Osc key={i} 
		   	 num={i+1} 
			 freq={osc.frequency.value.toFixed(2)} />
	);
	
	return (
		<div className="audio-wrapper">
			{oscList}
		</div>
	)
}


export default class App extends React.Component {

	componentDidMount() {
		window.addEventListener("keydown", Keys.keyDown, false);
		window.addEventListener("keyup", Keys.keyUp, false);
	}


	render(){
		return(
			<div className="flex-container" onKeyDown={Keys.keyDown} onKeyUp={Keys.keyUp}>
				<header><h1>Audio Vibrator</h1></header>
				<Oscs/>	
				<footer>
					<h3>created by Jesse French</h3>
				</footer>
					<p>(use keyboard 1-6 to trigger sounds, arrow keys to tune)</p>
			</div>
		);
	}
}