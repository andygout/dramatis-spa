import {
	REQUEST_COMPANY,
	RECEIVE_COMPANY
} from '../utils/model-action-names.js';

const company = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_COMPANY:
			return action.payload;

		case REQUEST_COMPANY:
		default:
			return state;

	}

};

export default company;
