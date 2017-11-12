import createAction from './base';
import { setError } from './error';
import { API_URL } from '../utils/constants';

const REQUEST_THEATRES = 'REQUEST_THEATRES';
const RECEIVE_THEATRES = 'RECEIVE_THEATRES';

const requestTheatres = () => createAction(REQUEST_THEATRES);
const receiveTheatres = theatres => createAction(RECEIVE_THEATRES, theatres);

const fetchTheatres = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().theatres.length) {

		dispatch(requestTheatres());

		return fetch(`${API_URL}/theatres`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(theatres => dispatch(receiveTheatres(theatres)))
			.catch(() => dispatch(setError(true)));

	}

};

export {
	REQUEST_THEATRES,
	RECEIVE_THEATRES,
	fetchTheatres
};
