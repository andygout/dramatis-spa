import {
	REQUEST_AWARD,
	RECEIVE_AWARD
} from '../utils/model-action-names.js';

const award = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_AWARD:
			return action.payload;

		case REQUEST_AWARD:
		default:
			return state;

	}

};

export default award;
