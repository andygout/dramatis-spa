import { List, fromJS } from 'immutable';

import {
	REQUEST_COMPANIES,
	RECEIVE_COMPANIES
} from '../utils/model-action-names';

const companies = (state = List(), action) => {

	switch (action.type) {

		case RECEIVE_COMPANIES:
			return fromJS(action.payload);

		case REQUEST_COMPANIES:
		default:
			return state;

	}

};

export default companies;
