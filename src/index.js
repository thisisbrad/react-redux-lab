import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './Redux/Store';

import App from './Components/App';
import Single from './Components/Single';
import PhotoGrid from './Components/PhotoGrid';

//prettier-ignore
const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
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
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(router, document.getElementById('root'));

registerServiceWorker();
