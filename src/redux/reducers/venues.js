import { List, fromJS } from 'immutable';

import {
	REQUEST_VENUES,
	RECEIVE_VENUES
} from '../utils/model-action-names';

const venues = (state = List(), action) => {

	switch (action.type) {

		case RECEIVE_VENUES:
			return fromJS(action.payload);

		case REQUEST_VENUES:
		default:
			return state;

	}

};

export default venues;
