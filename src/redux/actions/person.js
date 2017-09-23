import createAction from './base';
import { setError } from './error';

const REQUEST_PERSON = 'REQUEST_PERSON';
const RECEIVE_PERSON = 'RECEIVE_PERSON';

const requestPerson = () => createAction(REQUEST_PERSON);
const receivePerson = person => createAction(RECEIVE_PERSON, person);

const fetchPerson = uuid => (dispatch, getState) => {

	dispatch(setError(false));

	if (getState().person.uuid !== uuid) {

		dispatch(requestPerson());

		if (WEBPACK_CONFIG_IS_NODE) {

			const Person = require('../../server/models/person').default;

			const person = new Person({ uuid });

			return person.show()
				.then(({ person }) => dispatch(receivePerson(person)))
				.catch(() => null);

		} else {

			return fetch(`/api/people/${uuid}`, { 'credentials': 'same-origin' })
				.then(response => response.json())
				.then(person => dispatch(receivePerson(person)))
				.catch(() => dispatch(setError(true)));

		}

	}

};

export {
	REQUEST_PERSON,
	RECEIVE_PERSON,
	fetchPerson
};
