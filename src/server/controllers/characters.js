import renderJson from './lib/render-json';
import Character from '../models/character';

const showRoute = (req, res, next) => {

	const character = new Character(req.params);

	return character.show()
		.then(({ character }) => renderJson(req, res, character))
		.catch(err => next(err));

};

const listRoute = (req, res, next) => {

	return Character.list('character')
		.then(({ characters }) => renderJson(req, res, characters))
		.catch(err => next(err));

};

export {
	showRoute,
	listRoute
};
