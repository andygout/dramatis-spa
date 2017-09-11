import createAction from './base';
import { setError } from './error';

const REQUEST_PRODUCTIONS = 'REQUEST_PRODUCTIONS';
const RECEIVE_PRODUCTIONS = 'RECEIVE_PRODUCTIONS';

const requestProductions = () => createAction(REQUEST_PRODUCTIONS);
const receiveProductions = productions => createAction(RECEIVE_PRODUCTIONS, productions);

const fetchProductions = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().productions.length) {

		dispatch(requestProductions());

		if (WEBPACK_CONFIG_IS_NODE) {

			const Production = require('../../server/models/production').default;

			return Production.list('production')
				.then(({ productions }) => dispatch(receiveProductions(productions)))
				.catch(() => null);

		} else {

			return fetch('/api/productions', { 'credentials': 'same-origin' })
				.then(response => response.json())
				.then(productions => dispatch(receiveProductions(productions)))
				.catch(() => dispatch(setError(true)));

		}

	}

};

export {
	REQUEST_PRODUCTIONS,
	RECEIVE_PRODUCTIONS,
	fetchProductions
};
