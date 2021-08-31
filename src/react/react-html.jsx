import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import App from './App';

const reactHtml = (request, store) =>
	renderToString(
		<Provider store={store}>
			<StaticRouter location={request.url} context={{}}>
				<App />
			</StaticRouter>
		</Provider>
	);

export default reactHtml;
