import React, { Component } from 'react';

class Comments extends Component {

	handleSubmit = (e) => {
		e.preventDefault()
		const {postId} = this.props.match.params // deconstruce route params 
		const author = this.refs.author.value
		const comment = this.refs.comment.value
		// console.log('ADD COMMENT>> ', postId, author, comment)
		this.props.addComment(postId, author, comment)
		this.refs.commentForm.reset()
	};

	handleRemove = (i) => {
		const {postId} = this.props.match.params // deconstruce route params 
		// console.log('REMOVE COMMENT>> ', postId, i)
		this.props.removeComment(postId, i)
	};

	renderComment = (comment, i) => {
		return (
			<div key={i}> 
				<p>
					<strong>{comment.user} </strong>
					{comment.text}
					<button onClick={() => this.handleRemove(i)}>&times;</button>
				</p>
			</div>
		)
	};

	render() {
		const {postComments} = this.props
		return (
			<div>
				<h4>Comments:</h4>
				{postComments.map(this.renderComment)}

				<form ref="commentForm" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author"/>
					<input type="text" ref="comment" placeholder="comment"/>
					<input type="submit" hidden/>
				</form>
			</div>
			
		);
	}
}

export default Comments