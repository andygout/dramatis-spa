import createAction from './base';
import { setError } from './error';
import { API_URL } from '../utils/constants';

const REQUEST_PRODUCTIONS = 'REQUEST_PRODUCTIONS';
const RECEIVE_PRODUCTIONS = 'RECEIVE_PRODUCTIONS';

const requestProductions = () => createAction(REQUEST_PRODUCTIONS);
const receiveProductions = productions => createAction(RECEIVE_PRODUCTIONS, productions);

const fetchProductions = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().productions.length) {

		dispatch(requestProductions());

		return fetch(`${API_URL}/productions`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(productions => dispatch(receiveProductions(productions)))
			.catch(() => dispatch(setError(true)));

	}

};

export {
	REQUEST_PRODUCTIONS,
	RECEIVE_PRODUCTIONS,
	fetchProductions
};
