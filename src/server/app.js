/* eslint
	no-console: 0,
	no-unused-vars: ["error", { "argsIgnorePattern": "next" }]
*/

import express from 'express';
import favicon from 'serve-favicon';
import http from 'http';
import logger from 'morgan';
import path from 'path';
import session from 'express-session';

import { Helmet } from 'react-helmet';
import { matchPath } from 'react-router-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import getReactHtml from '../react/react-html';
import reducers from '../redux/reducers';
import routes from '../react/routes';

const app = express();

// Path is relative to `built/main.js`.
app.use(favicon(path.join(__dirname, 'favicons', 'favicon-16x16.png')));

app.use(logger('dev'));

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

app.use(express.static('public'));

const store = createStore(
	combineReducers(reducers),
	{},
	applyMiddleware(...[thunkMiddleware])
);

app.get('*', (req, res) => {

	const { dispatch, getState } = store;

	const fetchDataPromises = [];

	routes.some(route => {

		const match = matchPath(req.url, route);

		if (match && route.fetchData) route.fetchData.forEach(fn => fetchDataPromises.push(fn(dispatch, match)));

		return match

	});

	Promise.all(fetchDataPromises).then(() => {

		const preloadedState = getState();

		const reactHtml = getReactHtml(req, store);

		const head = Helmet.rewind();

		const html = `
			<!DOCTYPE html>

			<html>

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

	});

});

// Catch 404 and forward to error handler
app.use((req, res, next) => {

	const err = new Error('Not Found');

	err.status = 404;

	next(err);

});

// Error handlers
// Development error handler - will print stacktrace
if (app.get('env') === 'development') {

	app.use((err, req, res, next) => {

		console.log(err);

		const errStatus = err.status || 500;

		const errMsg = `${errStatus} Error: ${err.message}`;

		res.status(errStatus);

		return res.render('partials/templates/error', {
			page: { title: errMsg },
			message: errMsg,
			error: err
		});

	});

}

// Production error handler - no stacktraces leaked to user
app.use((err, req, res, next) => {

	const errStatus = err.status || 500;

	const errMsg = `${errStatus} Error: ${err.message}`;

	res.status(errStatus);

	return res.render('partials/templates/error', {
		page: { title: errMsg },
		message: errMsg,
		error: {}
	});

});

const normalizePort = val => {

	const port = parseInt(val, 10);

	if (isNaN(port)) return val;

	if (port >= 0) return port;

	return false;

};

const onError = err => {

	if (err.syscall !== 'listen') throw err;

	const bind = typeof port === 'string'
		? 'Pipe ' + port
		:'Port ' + port;

	switch (err.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw err;
	}

};

const port = normalizePort(process.env.PORT || '3001');

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));

server.on('error', onError);
