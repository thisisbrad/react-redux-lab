import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
	render() {
		// Grab the index from routes
		const { postId } = this.props.match.params;
		const i = this.props.posts.findIndex(post => post.code === postId);
		// Use the index to display single post and comments
		const post = this.props.posts[i];
		return (
			<div className="single-photo">
				<Photo key={i} i={i} post={post} {...this.props} />
				<Comments />
			</div>
		);
	}
}

export default Single;
