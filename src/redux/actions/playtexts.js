import createAction from './base';
import { setError } from './error';
import { API_URL } from '../utils/constants';

const REQUEST_PLAYTEXTS = 'REQUEST_PLAYTEXTS';
const RECEIVE_PLAYTEXTS = 'RECEIVE_PLAYTEXTS';

const requestPlaytexts = () => createAction(REQUEST_PLAYTEXTS);
const receivePlaytexts = playtexts => createAction(RECEIVE_PLAYTEXTS, playtexts);

const fetchPlaytexts = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().playtexts.length) {

		dispatch(requestPlaytexts());

		return fetch(`${API_URL}/playtexts`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(playtexts => dispatch(receivePlaytexts(playtexts)))
			.catch(() => dispatch(setError(true)));

	}

};

export {
	REQUEST_PLAYTEXTS,
	RECEIVE_PLAYTEXTS,
	fetchPlaytexts
};
