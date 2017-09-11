import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './app';
import reducers from '../redux/reducers';

window.onload = () => {

	const browserHistory = createHistory();

	const preloadedState = JSON.parse(document.getElementById('react-client-data').innerText);

	const routerMiddleware = createRouterMiddleware(browserHistory);

	const loggerMiddleware = createLogger();

	const store = createStore(
		combineReducers(reducers),
		preloadedState,
		applyMiddleware(...[routerMiddleware, thunkMiddleware, loggerMiddleware])
	);

	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={browserHistory}>
				<App />
			</ConnectedRouter>
		</Provider>,
		document.getElementById('app')
	);

};
