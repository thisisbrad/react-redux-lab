import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './Redux/Store'

import App from './Components/App'
import PhotoGrid from './Components/PhotoGrid'
import Single from './Components/Single'

const router = (
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
)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			{router}
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'))

registerServiceWorker() 