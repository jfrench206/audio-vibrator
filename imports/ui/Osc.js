import React from 'react';
import oscs, * as Audio from './../api/audio';
import keysPressed, * as Keys from './../api/keys';

export default class Osc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	freq: Audio.pitchRef,
    	on: false
    };
    this.update = this.update.bind(this);
  }

  update(){
  	var isOn = false;
  	if(keysPressed.indexOf(this.props.num.toString())===-1){
  		isOn = false;
  	} else {
  		isOn = true;
  	}
  		this.setState({
	  		freq: oscs[this.props.num-1].frequency.value.toFixed(1),
	  		on: isOn
	  	});
  }

  componentWillMount() {
  	this.setState({
  		freq: oscs[this.props.num-1].frequency.value.toFixed(1)
  	});
  }

  componentDidMount() {
  	this.inc = setInterval(this.update,100);
  }

  componentWillUnmount() {
  	clearInterval(this.inc);
  }

	render() {
		return (
			<div className="audio-module">
				<span>Osc {this.props.num}</span>
				<input type="checkbox" name={this.props.num} id={`check${this.props.num}`} checked={this.state.on}>
				</input>
				<div className="freq-readout">
					<h5>{this.state.freq.toString().padStart(5,'0')} Hz</h5>
				</div>
			</div>
		);
	}
}