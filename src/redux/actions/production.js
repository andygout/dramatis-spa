import createAction from './base';
import { setError } from './error';

const REQUEST_PRODUCTION = 'REQUEST_PRODUCTION';
const RECEIVE_PRODUCTION = 'RECEIVE_PRODUCTION';

const requestProduction = () => createAction(REQUEST_PRODUCTION);
const receiveProduction = production => createAction(RECEIVE_PRODUCTION, production);

const fetchProduction = uuid => (dispatch, getState) => {

	dispatch(setError(false));

	if (getState().production.uuid !== uuid) {

		dispatch(requestProduction());

		return fetch(`${process.env.API_URL}/productions/${uuid}`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(production => dispatch(receiveProduction(production)))
			.catch(() => dispatch(setError(true)));

	}

};

export {
	REQUEST_PRODUCTION,
	RECEIVE_PRODUCTION,
	fetchProduction
};
