import React from 'react';
import Osc from './Osc';
import * as Keys from './../api/keys';

function Oscs(props){
	return (
			<div className="audio-wrapper">
			<Osc num="1"/>
			<Osc num="2"/>
			<Osc num="3"/>
			<Osc num="4"/>
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
				<Oscs />
				<footer><h3>created by Jesse French</h3></footer>
			</div>
		);
	}
}