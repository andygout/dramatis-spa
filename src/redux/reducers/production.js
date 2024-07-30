import {
	REQUEST_PRODUCTION,
	RECEIVE_PRODUCTION
} from '../utils/model-action-names.js';

const production = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_PRODUCTION:
			return action.payload;

		case REQUEST_PRODUCTION:
		default:
			return state;

	}

};

export default production;
