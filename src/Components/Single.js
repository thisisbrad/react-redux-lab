import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
	render() {
		const {posts, comments} = this.props // deconstruce out of props
		const {postId} = this.props.match.params // deconstruce route params 

		// to get the index 'i' use the array prototype method 'findIndex'
		// use a callback function to loop and return the post
		// where the 'post.code' is equal to the 'postId' being pulled in 
		// from the route params
		const i = posts.findIndex((post) => post.code === postId)
		const post = posts[i] // get the single post using 'i'
		// grab the comments of the post based on postId from route params
		// if there are no comments for the post set it to an empty array
		const postComments = comments[postId] || [] 

		console.log(post)
		return (
			<div>
				<p><span role="img" aria-label="person">💁</span> I'm the Single Photo</p>
				<Photo i={i} post={post} {...this.props}/>
				<Comments postComments={postComments} {...this.props}/>
			</div>
		)
	}
}
 export default Single