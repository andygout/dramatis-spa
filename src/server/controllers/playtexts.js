import renderJson from './lib/render-json';
import Playtext from '../models/playtext';

const showRoute = (req, res, next) => {

	const playtext = new Playtext(req.params);

	return playtext.show()
		.then(({ playtext }) => renderJson(req, res, playtext))
		.catch(err => next(err));

};

const listRoute = (req, res, next) => {

	return Playtext.list('playtext')
		.then(({ playtexts }) => renderJson(req, res, playtexts))
		.catch(err => next(err));

};

export {
	showRoute,
	listRoute
};
