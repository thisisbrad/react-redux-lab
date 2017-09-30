import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
	render() {
		const { posts } = this.props;
		return (
			<div className="photo-grid">
				{posts.map((post, i) => (
					<Photo key={i} i={i} post={post} {...this.props} />
				))}
			</div>
		);
	}
}

export default PhotoGrid;
