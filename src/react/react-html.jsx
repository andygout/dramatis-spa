import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import App from './App';

export default (request, store) => // eslint-disable-line react/display-name
	renderToString(
		<Provider store={store}>
			<StaticRouter location={request.url} context={{}}>
				<App />
			</StaticRouter>
		</Provider>
	);
