import { SET_ERROR } from '../actions/error';

const error = (state = false, action) => {

	switch (action.type) {

		case SET_ERROR:
			return action.payload;

		default:
			return state;

	}

};

export default error;
