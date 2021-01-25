import { Map, fromJS } from 'immutable';

import {
	REQUEST_COMPANY,
	RECEIVE_COMPANY
} from '../utils/model-action-names';

const company = (state = Map(), action) => {

	switch (action.type) {

		case RECEIVE_COMPANY:
			return fromJS(action.payload);

		case REQUEST_COMPANY:
		default:
			return state;

	}

};

export default company;
