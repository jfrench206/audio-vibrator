import React from 'react';
import Osc from './Osc';
import * as audio from './../api/audio';

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
	render(){
		return(
			<div className="flex-container">
				<header><h1>Audio Vibrator</h1></header>
				<Oscs/>
				<footer><h3>created by Jesse French</h3></footer>
			</div>
		);
	}
}