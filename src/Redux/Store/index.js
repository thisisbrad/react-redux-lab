import {createStore, applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'


//import root reducer 
import rootReducer from '../Reducers'

import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
	comments,
	posts
}

export const history = createHistory()
const middleware = routerMiddleware(history)
//applyMiddleware(middleware),

const store = createStore(
	rootReducer, 
	defaultState, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;