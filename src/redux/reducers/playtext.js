import { REQUEST_PLAYTEXT, RECEIVE_PLAYTEXT } from '../utils/actions-list';

const playtext = (state = {}, action) => {

	switch (action.type) {

		case REQUEST_PLAYTEXT:
			return state;

		case RECEIVE_PLAYTEXT:
			return action.payload;

		default:
			return state;

	}

};

export default playtext;
