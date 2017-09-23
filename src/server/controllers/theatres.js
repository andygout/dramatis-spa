import renderJson from './lib/render-json';
import Theatre from '../models/theatre';

const showRoute = (req, res, next) => {

	const theatre = new Theatre(req.params);

	return theatre.show()
		.then(({ theatre }) => renderJson(req, res, theatre))
		.catch(err => next(err));

};

const listRoute = (req, res, next) => {

	return Theatre.list('theatre')
		.then(({ theatres }) => renderJson(req, res, theatres))
		.catch(err => next(err));

};

export {
	showRoute,
	listRoute
};
