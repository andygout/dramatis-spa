import createAction from './base';
import { setError } from './error';

const REQUEST_PLAYTEXT = 'REQUEST_PLAYTEXT';
const RECEIVE_PLAYTEXT = 'RECEIVE_PLAYTEXT';

const requestPlaytext = () => createAction(REQUEST_PLAYTEXT);
const receivePlaytext = playtext => createAction(RECEIVE_PLAYTEXT, playtext);

const fetchPlaytext = uuid => (dispatch, getState) => {

	dispatch(setError(false));

	if (getState().playtext.uuid !== uuid) {

		dispatch(requestPlaytext());

		return fetch(`${process.env.API_URL}/playtexts/${uuid}`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(playtext => dispatch(receivePlaytext(playtext)))
			.catch(() => dispatch(setError(true)));

	}

};


export {
	REQUEST_PLAYTEXT,
	RECEIVE_PLAYTEXT,
	fetchPlaytext
};
