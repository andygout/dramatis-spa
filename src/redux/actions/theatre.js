import createAction from './base';
import { setError } from './error';

const REQUEST_THEATRE = 'REQUEST_THEATRE';
const RECEIVE_THEATRE = 'RECEIVE_THEATRE';

const requestTheatre = () => createAction(REQUEST_THEATRE);
const receiveTheatre = theatre => createAction(RECEIVE_THEATRE, theatre);

const fetchTheatre = uuid => (dispatch, getState) => {

	dispatch(setError(false));

	if (getState().theatre.uuid !== uuid) {

		dispatch(requestTheatre());

		if (WEBPACK_CONFIG_IS_NODE) {

			const Theatre = require('../../server/models/theatre').default;

			const theatre = new Theatre({ uuid });

			return theatre.show()
				.then(({ theatre }) => dispatch(receiveTheatre(theatre)))
				.catch(() => null);

		} else {

			return fetch(`/api/theatres/${uuid}`, { 'credentials': 'same-origin' })
				.then(response => response.json())
				.then(theatre => dispatch(receiveTheatre(theatre)))
				.catch(() => dispatch(setError(true)));

		}

	}

};

export {
	REQUEST_THEATRE,
	RECEIVE_THEATRE,
	fetchTheatre
};
