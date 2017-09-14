import React from 'react';
import Buttons from './buttons';
import Num from './num';

// Stateless component
export default class App extends React.Component {
	render() {
		return (
			<div>
				<Num num={ this.props.count } />
				<Buttons plusClick={ () => this.props.dispatch('increment', 1) } minusClick={ () => this.props.dispatch('decrement', 1) } />
			</div>
		);
	}
}