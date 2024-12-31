import { configureStore } from '@reduxjs/toolkit';
import { Router } from 'express';
import { Helmet } from 'react-helmet';

import getReactHtml from '../react/react-html.jsx';
import reducers from '../redux/reducers/index.js';
import { api } from '../redux/slices/api.js';

const router = new Router();

const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
});

router.get('*', async (request, response, next) => {

	try {

		const { getState } = store;

		const preloadedState = getState();

		const reactHtml = getReactHtml(request, store);

		const head = Helmet.rewind();

		const html = `
			<!DOCTYPE html>

			<html lang="en-GB">

				<head>
					${head.title.toString()}
					<link rel="stylesheet" href="/main.css">
					<script src="/main.js"></script>
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
