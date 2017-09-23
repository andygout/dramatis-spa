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

		if (WEBPACK_CONFIG_IS_NODE) {

			const Playtext = require('../../server/models/playtext').default;

			const playtext = new Playtext({ uuid });

			return playtext.show()
				.then(({ playtext }) => dispatch(receivePlaytext(playtext)))
				.catch(() => null);

		} else {

			return fetch(`/api/playtexts/${uuid}`, { 'credentials': 'same-origin' })
				.then(response => response.json())
				.then(playtext => dispatch(receivePlaytext(playtext)))
				.catch(() => dispatch(setError(true)));

		}

	}

};


export {
	REQUEST_PLAYTEXT,
	RECEIVE_PLAYTEXT,
	fetchPlaytext
};
