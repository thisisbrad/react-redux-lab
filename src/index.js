import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './Redux/Store';

import Main from './Components/Main';
import Single from './Components/Single';
import PhotoGrid from './Components/PhotoGrid';

//prettier-ignore
const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<nav>
				<Route exact path="/" render={() => (
					<Main>
						<PhotoGrid />
					</Main>
				)}/>
				<Route path="/view/:postId" render={({match}) => (
					<Main>
						<Single match={match} />
					</Main>
				)}/>
			</nav>
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
