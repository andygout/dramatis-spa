import {
	REQUEST_CHARACTERS,
	RECEIVE_CHARACTERS
} from '../utils/model-action-names';

const characters = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_CHARACTERS:
			return action.payload;

		case REQUEST_CHARACTERS:
		default:
			return state;

	}

};

export default characters;
