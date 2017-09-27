import { createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

// import rootReducers that we haven't made yet
import rootReducer from '../Reducers';

// import dummy data
import comments from './data/comments';
import posts from './data/posts';

// app's initial default state
const defaultState = {
	comments,
	posts
};

export const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
	rootReducer, 
	defaultState, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
