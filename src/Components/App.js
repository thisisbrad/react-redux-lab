import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World from App</h1>
				{/* 
						This is where 'react-router' is passing down 
						the child component.
				*/}
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default App;
