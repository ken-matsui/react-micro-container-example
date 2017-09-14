import React from 'react';

export default class Num extends React.Component {
	render() {
		return (
			<div>
				<span className="text">{ this.props.num }</span>
			</div>
		);
	}
}