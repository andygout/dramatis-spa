import {
	ACTIVATE_ERROR,
	DEACTIVATE_ERROR
} from '../utils/error-action-names.js';

const error = (state = { isActive: false }, action) => {

	switch (action.type) {

		case ACTIVATE_ERROR:
		case DEACTIVATE_ERROR:
			return action.payload;

		default:
			return state;

	}

};

export default error;
