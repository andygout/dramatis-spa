import { REQUEST_CHARACTERS, RECEIVE_CHARACTERS } from '../utils/model-actions';

const characters = (state = [], action) => {

	switch (action.type) {

		case REQUEST_CHARACTERS:
			return state;

		case RECEIVE_CHARACTERS:
			return action.payload;

		default:
			return state;

	}

};

export default characters;
