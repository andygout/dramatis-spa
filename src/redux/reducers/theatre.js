import { Map, fromJS } from 'immutable';

import {
	REQUEST_THEATRE,
	RECEIVE_THEATRE
} from '../utils/model-action-names';

const theatre = (state = Map(), action) => {

	switch (action.type) {

		case RECEIVE_THEATRE:
			return fromJS(action.payload);

		case REQUEST_THEATRE:
		default:
			return state;

	}

};

export default theatre;
