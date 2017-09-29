import { createStore, compose, applyMiddleware } from 'redux';
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

// Creating the browser history and attaching it to react-router-redux
export const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = compose(
// 	applyMiddleware(middleware),
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// Creates the Redux store and added Redux debug tools
const store = createStore(
	rootReducer,
	defaultState,
	composeEnhancers(applyMiddleware(middleware))
);

export default store;
