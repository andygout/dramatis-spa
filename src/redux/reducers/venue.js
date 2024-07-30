import {
	REQUEST_VENUE,
	RECEIVE_VENUE
} from '../utils/model-action-names.js';

const venue = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_VENUE:
			return action.payload;

		case REQUEST_VENUE:
		default:
			return state;

	}

};

export default venue;
