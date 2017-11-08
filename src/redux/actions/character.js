import createAction from './base';
import { setError } from './error';

const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
const RECEIVE_CHARACTER = 'RECEIVE_CHARACTER';

const requestCharacter = () => createAction(REQUEST_CHARACTER);
const receiveCharacter = character => createAction(RECEIVE_CHARACTER, character);

const fetchCharacter = uuid => (dispatch, getState) => {

	dispatch(setError(false));

	if (getState().character.uuid !== uuid) {

		dispatch(requestCharacter());

		return fetch(`${process.env.API_URL}/characters/${uuid}`, { 'mode': 'cors' })
			.then(response => response.json())
			.then(character => dispatch(receiveCharacter(character)))
			.catch(() => dispatch(setError(true)));

	}

};

export {
	REQUEST_CHARACTER,
	RECEIVE_CHARACTER,
	fetchCharacter
};
