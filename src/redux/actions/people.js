import createAction from './base';
import { setError } from './error';

const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';

const requestPeople = () => createAction(REQUEST_PEOPLE);
const receivePeople = people => createAction(RECEIVE_PEOPLE, people);

const fetchPeople = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().people.length) {

		dispatch(requestPeople());

		if (WEBPACK_CONFIG_IS_NODE) {

			const Person = require('../../server/models/person').default;

			return Person.list('person')
				.then(({ people }) => dispatch(receivePeople(people)))
				.catch(() => null);

		} else {

			return fetch('/api/people', { 'credentials': 'same-origin' })
				.then(response => response.json())
				.then(people => dispatch(receivePeople(people)))
				.catch(() => dispatch(setError(true)));

		}

	}

};

export {
	REQUEST_PEOPLE,
	RECEIVE_PEOPLE,
	fetchPeople
};
