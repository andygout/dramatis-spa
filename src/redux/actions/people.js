import createAction from './base';
import { setError } from './error';
import { API_URL } from '../utils/constants';

const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';

const requestPeople = () => createAction(REQUEST_PEOPLE);
const receivePeople = people => createAction(RECEIVE_PEOPLE, people);

const fetchPeople = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().people.length) {

		dispatch(requestPeople());

		return fetch(`${API_URL}/people`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(people => dispatch(receivePeople(people)))
			.catch(() => dispatch(setError(true)));

	}

};

export {
	REQUEST_PEOPLE,
	RECEIVE_PEOPLE,
	fetchPeople
};
