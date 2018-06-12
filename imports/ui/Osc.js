import React from 'react';
import oscs, * as Audio from './../api/audio';
import * as keys from './../api/keys';

export default class Osc extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {freq: Audio.pitchRef};
  // }

  // componentDidMount() {
  // 	this.setState({
  // 		freq: oscs[this.props.num-1].frequency.value.toFixed(2),
  // 		setting: false
  // 	});
  // }

	render() {
		return (
			<div className="audio-module">
				<span>Osc {this.props.num}</span>
				<input type="checkbox" name={this.props.num} id={`check${this.props.num}`} checked={!!this.props.checked}>
				</input>
				<p>{this.props.freq} Hz</p>
			</div>
		);
	}
}