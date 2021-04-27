import { Map, fromJS } from 'immutable';

import {
	REQUEST_VENUE,
	RECEIVE_VENUE
} from '../utils/model-action-names';

const venue = (state = Map(), action) => {

	switch (action.type) {

		case RECEIVE_VENUE:
			return fromJS(action.payload);

		case REQUEST_VENUE:
		default:
			return state;

	}

};

export default venue;
