import { configureStore } from '@reduxjs/toolkit';
import { Router } from 'express';

import getDocumentTitle from '../lib/get-document-title.js';
import getReactHtml from '../react/react-html.jsx';
import reducers from '../redux/reducers/index.js';
import { api } from '../redux/slices/api.js';

const router = new Router();

const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
});

router.use(async (request, response, next) => {

	try {

		const { getState } = store;

		const preloadedState = getState();

		const reactHtml = getReactHtml(request, store);

		const documentTitle = getDocumentTitle();

		// Ordering of stylesheet groups is important.
		const html = `
			<!DOCTYPE html>

			<html lang="en-GB">

				<head>
					<title>${documentTitle}</title>

					<link rel="stylesheet" href="/stylesheets/normalize.css" />

					<link rel="stylesheet" href="/stylesheets/color-variables.css" />

					<link rel="stylesheet" href="/stylesheets/footer.css" />
					<link rel="stylesheet" href="/stylesheets/header.css" />
					<link rel="stylesheet" href="/stylesheets/instance.css" />
					<link rel="stylesheet" href="/stylesheets/list.css" />
					<link rel="stylesheet" href="/stylesheets/navigation.css" />
					<link rel="stylesheet" href="/stylesheets/page.css" />
					<link rel="stylesheet" href="/stylesheets/text.css" />

					<link rel="stylesheet" href="/stylesheets/scss-imports.css" />
					<link rel="stylesheet" href="/stylesheets/react-bootstrap-typeahead.css" />
					<link rel="stylesheet" href="/stylesheets/react-bootstrap-typeahead.bs5.css" />

					<link rel="stylesheet" href="/stylesheets/bootstrap-modifiers.css" />
					<link rel="stylesheet" href="/stylesheets/react-bootstrap-typeahead-modifiers.css" />

					<script src="/scripts/main.js"></script>

					<meta charset="utf-8">
				</head>

				<script id="react-client-data" type="text/json">
					${JSON.stringify(preloadedState)}
				</script>

				<div id="page-container" class="page-container">
					${reactHtml}
				</div>

			</html>
		`.split('\n').map(line => line.trim()).join('');

		response.send(html);

	} catch (error) {

		next(error);

	}

});

export default router;
