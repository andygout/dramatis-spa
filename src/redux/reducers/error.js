import {
	RECEIVE_ERROR,
	CANCEL_ERROR
} from '../utils/error-action-names';

const error = (state = { isExistent: false }, action) => {

	switch (action.type) {

		case RECEIVE_ERROR:
		case CANCEL_ERROR:
			return action.payload;

		default:
			return state;

	}

};

export default error;
