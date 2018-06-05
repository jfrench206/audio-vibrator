import React from 'react';
import Osc from './Osc';

export default class App extends React.Component {
	render(){
		return(
			<div className="flex-container">
				<header><h1>Audio Vibrator</h1></header>
				<div className="audio-wrapper">
					<Osc id="osc1"/>
				</div>
				<footer><h3>created by Jesse French</h3></footer>
			</div>
		);
	}
}