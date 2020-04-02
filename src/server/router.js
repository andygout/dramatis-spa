import express from 'express';
import { fromJS } from 'immutable';
import { Helmet } from 'react-helmet';
import { matchPath } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunkMiddleware from 'redux-thunk';

import getReactHtml from '../react/react-html';
import reducers from '../redux/reducers';
import routes from '../react/routes';

const router = express.Router();

const store = createStore(
	combineReducers(reducers),
	fromJS({}),
	applyMiddleware(...[thunkMiddleware])
);

router.get('*', async (req, res, next) => {

	try {

		const { dispatch, getState } = store;

		const fetchDataPromises = [];

		routes.some(route => {

			const match = matchPath(req.url, route);

			if (match && route.fetchData) route.fetchData.forEach(fn => fetchDataPromises.push(fn(dispatch, match)));

			return match

		});

		await Promise.all(fetchDataPromises);

		const preloadedState = getState();

		const reactHtml = getReactHtml(req, store);

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

				<div id="app" class="app">
					${reactHtml}
				</div>

			</html>
		`.split('\n').map(line => line.trim()).join('');

		res.write(html);

		res.end();

	} catch (error) {

		next(error);

	}

});

export default router;
