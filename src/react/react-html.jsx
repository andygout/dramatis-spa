import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import AppRoutes from './AppRoutes';

const reactHtml = (request, store) =>
	renderToString(
		<Provider store={store}>
			<StaticRouter location={request.url} context={{}}>
				<AppRoutes />
			</StaticRouter>
		</Provider>
	);

export default reactHtml;
