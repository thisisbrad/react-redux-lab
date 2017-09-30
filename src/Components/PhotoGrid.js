import React, { Component } from 'react';

class PhotoGrid extends Component {
	render() {
		return (
			<div>
				PhotoGrid View
				<pre>{JSON.stringify(this.props.posts, null, ' ')}</pre>
			</div>
		);
	}
}

export default PhotoGrid;
