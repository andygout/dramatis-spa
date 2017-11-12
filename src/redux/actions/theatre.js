import createAction from './base';
import { setError } from './error';
import { API_URL } from '../utils/constants';

const REQUEST_THEATRE = 'REQUEST_THEATRE';
const RECEIVE_THEATRE = 'RECEIVE_THEATRE';

const requestTheatre = () => createAction(REQUEST_THEATRE);
const receiveTheatre = theatre => createAction(RECEIVE_THEATRE, theatre);

const fetchTheatre = uuid => (dispatch, getState) => {

	dispatch(setError(false));

	if (getState().theatre.uuid !== uuid) {

		dispatch(requestTheatre());

		return fetch(`${API_URL}/theatres/${uuid}`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(theatre => dispatch(receiveTheatre(theatre)))
			.catch(() => dispatch(setError(true)));

	}

};

export {
	REQUEST_THEATRE,
	RECEIVE_THEATRE,
	fetchTheatre
};
