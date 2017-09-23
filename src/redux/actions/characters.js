import createAction from './base';
import { setError } from './error';

const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';

const requestCharacters = () => createAction(REQUEST_CHARACTERS);
const receiveCharacters = characters => createAction(RECEIVE_CHARACTERS, characters);

const fetchCharacters = () => (dispatch, getState) => {

	dispatch(setError(false));

	if (!getState().characters.length) {

		dispatch(requestCharacters());

		if (WEBPACK_CONFIG_IS_NODE) {

			const Character = require('../../server/models/character').default;

			return Character.list('character')
				.then(({ characters }) => dispatch(receiveCharacters(characters)))
				.catch(() => null);

		} else {

			return fetch('/api/characters', { 'credentials': 'same-origin' })
				.then(response => response.json())
				.then(characters => dispatch(receiveCharacters(characters)))
				.catch(() => dispatch(setError(true)));

		}

	}

};

export {
	REQUEST_CHARACTERS,
	RECEIVE_CHARACTERS,
	fetchCharacters
};
