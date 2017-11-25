import { REQUEST_CHARACTER, RECEIVE_CHARACTER } from '../actions/utils/actions-list';

const character = (state = {}, action) => {

	switch (action.type) {

		case REQUEST_CHARACTER:
			return state;

		case RECEIVE_CHARACTER:
			return action.payload;

		default:
			return state;

	}

};

export default character;
