function postComments(state=[], action) {
		// once passed on to this function 'state' is now 
		// just the comments for a single post
		switch(action.type) {
			case 'ADD_COMMENT':
				console.log('state: ', state)
				console.log('action: ', action)
				return [ ...state, {
					user: action.author,
					text: action.comment
				}]
			case 'REMOVE_COMMENT':
				return [
					...state.slice(0,action.i), // grabs all comments before 'i'
					...state.slice(action.i+1) // grabs all comments after 'i'
				]
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