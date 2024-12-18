import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk as thunkMiddleware } from 'redux-thunk';

import AppRoutes from './AppRoutes.jsx';
import reducers from '../redux/reducers/index.js';

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
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);

};
