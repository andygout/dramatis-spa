import { configureStore } from '@reduxjs/toolkit';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reduxLoggerMiddleware from 'redux-logger';

import AppRoutes from './AppRoutes.jsx';
import reducers from '../redux/reducers/index.js';

window.onload = () => {

	const preloadedState = JSON.parse(document.getElementById('react-client-data').innerText);

	const middleware = getDefaultMiddleware => {

		const middleware = getDefaultMiddleware();

		if (process.env.NODE_ENV !== 'production') {
			middleware.push(reduxLoggerMiddleware);
		}

		return middleware;

	};

	const store = configureStore({
		reducer: reducers,
		preloadedState,
		middleware,
		devTools: process.env.NODE_ENV !== 'production'
	});

	hydrateRoot(
		document.getElementById('page-container'),
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);

};
