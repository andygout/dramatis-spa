import { SET_ERROR_STATUS } from '../actions/error';

const error = (state = false, action) => {

	switch (action.type) {

		case SET_ERROR_STATUS:
			return action.payload;

		default:
			return state;

	}

};

export default error;
