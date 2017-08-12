function postComments(state=[], action) {
		switch(action.type) {
			case 'ADD_COMMENT': 
				return state
			case 'REMOVE_COMMENT': 
				return state
			default: 
				return state
		}
		return state
}

function comments(state=[], action) {
		if(typeof action.postId !== 'undefined') {
			// return a copy of state but tack on a new copy of the post passed in
			// [keyOfTheObject] : function above being passed a copy of the single post
			// and the either action object
			return {
				...state,
				[action.postId] : postComments(state[action.postId], action)
			}
		}
		return state
}

export default comments