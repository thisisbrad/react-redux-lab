import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
	render() {
		const { posts } = this.props;
		return (
			<div className="photo-grid">{posts.map((post, i) => <Photo />)}</div>
		);
	}
}

export default PhotoGrid;
