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

		return fetch(`${process.env.API_URL}/people/${uuid}`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(person => dispatch(receivePerson(person)))
			.catch(() => dispatch(setError(true)));

	}

};

export {
	REQUEST_PERSON,
	RECEIVE_PERSON,
	fetchPerson
};
