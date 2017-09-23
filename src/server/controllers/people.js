import renderJson from './lib/render-json';
import Person from '../models/person';

const showRoute = (req, res, next) => {

	const person = new Person(req.params);

	return person.show()
		.then(({ person }) => renderJson(req, res, person))
		.catch(err => next(err));

};

const listRoute = (req, res, next) => {

	return Person.list('person')
		.then(({ people }) => renderJson(req, res, people))
		.catch(err => next(err));

};

export {
	showRoute,
	listRoute
};
