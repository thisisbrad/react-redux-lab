import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../Redux/Actions';
import Main from './Main';

// Takes all the state from the Store and passes it down
// as props to every child component
function mapStateToProps(state) {
	console.log(state);
	return {
		posts: state.posts,
		comments: state.comments
	};
}

// Takes all action dispathers and sets them
// as props to every child component
function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// Connects them all and calls on the Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
