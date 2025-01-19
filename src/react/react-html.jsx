import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import AppRoutes from './AppRoutes.jsx';

const reactHtml = (request, store) =>
	renderToString(
		<Provider store={store}>
			<StaticRouter location={request.url} context={{}}>
				<AppRoutes />
			</StaticRouter>
		</Provider>
	);

export default reactHtml;
