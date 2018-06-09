import React from 'react';
import * as audio from './../api/audio';
import * as keys from './../api/keys';

export default class Osc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {freq: audio.pitchRef};
  }

	render() {
		return (
			<div className="audio-module">
				<span>Osc {this.props.num}</span>
				<input type="checkbox" name={this.props.num} id={`check${this.props.num}`}>
				</input>
				<p>{this.state.freq} Hz</p>
			</div>
		);
	}
}