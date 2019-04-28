import React from 'react';
import { avengers } from'./avengersData';
import AvengersList from './components/AvengersList'
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			avengers: avengers
		};
	}
	render() {
		return (
			<div className="wrapper">
				<h2 className="text-center">Welcome To Avengers</h2>
        <AvengersList avengers={this.state.avengers} />
			</div>
		);
	}
}

export default App;
