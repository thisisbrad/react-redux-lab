import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//prettier-ignore
class App extends Component {
	render() {
		return (
			<div>
				<h1> 
					<Link to="/">
							<span role="img" aria-label="camera">📸</span> Redux Photo Gallery
					</Link>
				</h1>
				{/* 
						This is where 'react-router' is passing down 
						the child component.
				*/}
				{ React.cloneElement(this.props.children, this.props) }
			</div>
		);
	}
}

export default App;
