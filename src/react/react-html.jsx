import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from './app';

export default (req, store) => renderToString(
		<Provider store={store}>
			<StaticRouter location={req.url} context={{}}>
				<App/>
			</StaticRouter>
		</Provider>
	);
