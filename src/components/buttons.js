import React from 'react';

export default class Buttons extends React.Component {
	render() {
		return (
			<div>
				<button className="square_btn plus" onClick={ this.props.plusClick }>プラス</button>
				<button className="square_btn minus" onClick={ this.props.minusClick }>マイナス</button>
			</div>
		);
	}
}