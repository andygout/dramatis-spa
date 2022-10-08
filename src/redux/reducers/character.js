import {
	REQUEST_CHARACTER,
	RECEIVE_CHARACTER
} from '../utils/model-action-names';

const character = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_CHARACTER:
			return action.payload;

		case REQUEST_CHARACTER:
		default:
			return state;

	}

};

export default character;
