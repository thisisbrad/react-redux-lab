import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photo extends Component {
	render() {
		const { post, i, comments } = this.props;
		return (
			<figure>
				<Link to={`/view/${post.code}`}>
					<img
						src={post.display_src}
						alt={post.caption}
						width="200"
						height="200"
					/>
				</Link>
				<p>{post.caption}</p>
			</figure>
		);
	}
}

export default Photo;
