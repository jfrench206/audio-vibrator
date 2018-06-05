import React from 'react';

export default class Osc extends React.Component {
	render() {
		return (
			<div className="audio-module"><span>Osc {this.props.num}</span><input type="checkbox" name={this.props.num} id={`check${this.props.num}`}></input></div>
		);
	}
}