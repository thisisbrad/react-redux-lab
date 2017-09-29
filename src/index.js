import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './Redux/Store';

import App from './Components/App';
import Single from './Components/Single';
import PhotoGrid from './Components/PhotoGrid';

//prettier-ignore
const router = (
	<Router>
		<nav>
			<Route exact path="/" render={() => (
					<App>
						<PhotoGrid />
					</App>
			)}/>
			<Route path="/view/:postId" render={({match}) => (
					<App>
						<Single match={match}/>
					</App>
			)}/>
		</nav>
	</Router>
)

ReactDOM.render(router, document.getElementById('root'));

registerServiceWorker();
