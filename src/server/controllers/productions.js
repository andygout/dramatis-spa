import renderJson from './lib/render-json';
import Production from '../models/production';

const showRoute = (req, res, next) => {

	const production = new Production(req.params);

	return production.show()
		.then(({ production }) => renderJson(req, res, production))
		.catch(err => next(err));

};

const listRoute = (req, res, next) => {

	return Production.list('production')
		.then(({ productions }) => renderJson(req, res, productions))
		.catch(err => next(err));

};

export {
	showRoute,
	listRoute
};
