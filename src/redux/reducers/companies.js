import {
	REQUEST_COMPANIES,
	RECEIVE_COMPANIES
} from '../utils/model-action-names.js';

const companies = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_COMPANIES:
			return action.payload;

		case REQUEST_COMPANIES:
		default:
			return state;

	}

};

export default companies;
