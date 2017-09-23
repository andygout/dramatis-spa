import createAction from './base';
import { setError } from './error';

const REQUEST_PLAYTEXTS = 'REQUEST_PLAYTEXTS';
const RECEIVE_PLAYTEXTS = 'RECEIVE_PLAYTEXTS';

const requestPlaytexts = () => createAction(REQUEST_PLAYTEXTS);
const receivePlaytexts = playtexts => createAction(RECEIVE_PLAYTEXTS, playtexts);

const fetchPlaytexts = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().playtexts.length) {

		dispatch(requestPlaytexts());

		if (WEBPACK_CONFIG_IS_NODE) {

			const Playtext = require('../../server/models/playtext').default;

			return Playtext.list('playtext')
				.then(({ playtexts }) => dispatch(receivePlaytexts(playtexts)))
				.catch(() => null);

		} else {

			return fetch('/api/playtexts', { 'credentials': 'same-origin' })
				.then(response => response.json())
				.then(playtexts => dispatch(receivePlaytexts(playtexts)))
				.catch(() => dispatch(setError(true)));

		}

	}

};

export {
	REQUEST_PLAYTEXTS,
	RECEIVE_PLAYTEXTS,
	fetchPlaytexts
};
