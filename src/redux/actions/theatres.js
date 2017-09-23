import createAction from './base';
import { setError } from './error';

const REQUEST_THEATRES = 'REQUEST_THEATRES';
const RECEIVE_THEATRES = 'RECEIVE_THEATRES';

const requestTheatres = () => createAction(REQUEST_THEATRES);
const receiveTheatres = theatres => createAction(RECEIVE_THEATRES, theatres);

const fetchTheatres = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().theatres.length) {

		dispatch(requestTheatres());

		if (WEBPACK_CONFIG_IS_NODE) {

			const Theatre = require('../../server/models/theatre').default;

			return Theatre.list('theatre')
				.then(({ theatres }) => dispatch(receiveTheatres(theatres)))
				.catch(() => null);

		} else {

			return fetch('/api/theatres', { 'credentials': 'same-origin' })
				.then(response => response.json())
				.then(theatres => dispatch(receiveTheatres(theatres)))
				.catch(() => dispatch(setError(true)));

		}

	}

};

export {
	REQUEST_THEATRES,
	RECEIVE_THEATRES,
	fetchTheatres
};
