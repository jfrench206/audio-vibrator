import React from 'react';

export default class Osc extends React.Component {
	render() {
		return (
			<div className="audio-module" id={this.props.id}><span>Osc 1</span><input type="checkbox" name="1" id="check1"></input></div>
		);
	}
}