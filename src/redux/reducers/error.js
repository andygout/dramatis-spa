import { Map, fromJS } from 'immutable';

import { SET_ERROR_STATUS, RESET_ERROR_STATUS } from '../actions/error';

const error = (state = Map({ exists: false }), action) => {

	switch (action.type) {

		case SET_ERROR_STATUS:
			return fromJS(action.payload);

		case RESET_ERROR_STATUS:
			return fromJS(action.payload);

		default:
			return state;

	}

};

export default error;
