import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import reducers from '../redux/reducers';

window.onload = () => {

	const preloadedState = JSON.parse(document.getElementById('react-client-data').innerText);

	const loggerMiddleware = createLogger();

	const store = createStore(
		combineReducers(reducers),
		preloadedState,
		applyMiddleware(...[thunkMiddleware, loggerMiddleware])
	);

	hydrateRoot(
		document.getElementById('page-container'),
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);

};
