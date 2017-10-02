import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photo extends Component {
	render() {
		const { post, i, comments, increment } = this.props;
		return (
			<figure>
				<Link to={`/view/${post.code}`}>
					<img src={post.display_src} alt={post.caption} />
				</Link>
				<p>{post.caption}</p>
				<button onClick={() => increment(i)}> &hearts; {post.likes} </button>
				<p>{comments[post.code] ? comments[post.code].length : 0}</p>
			</figure>
		);
	}
}

export default Photo;
