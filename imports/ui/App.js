import React from 'react';
import Osc from './Osc';

export default class App extends React.Component {
	render(){
		return(
			<div className="flex-container">
				<header><h1>Audio Vibrator</h1></header>
				<div className="audio-wrapper">
					<Osc num="1"/>
					<Osc num="2"/>
					<Osc num="3"/>
					<Osc num="4"/>
				</div>
				<footer><h3>created by Jesse French</h3></footer>
			</div>
		);
	}
}