import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import AppRoutes from './AppRoutes.jsx';
import Layout from './Layout.jsx';

const reactHtml = (request, store) =>
	renderToString(
		<Provider store={store}>
			<StaticRouter location={request.url} context={{}}>
				<Layout>
					<AppRoutes />
				</Layout>
			</StaticRouter>
		</Provider>
	);

export default reactHtml;
