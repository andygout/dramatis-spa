import { List, fromJS } from 'immutable';

import {
	REQUEST_PLAYTEXTS,
	RECEIVE_PLAYTEXTS
} from '../utils/model-action-names';

const playtexts = (state = List(), action) => {

	switch (action.type) {

		case RECEIVE_PLAYTEXTS:
			return fromJS(action.payload);

		case REQUEST_PLAYTEXTS:
		default:
			return state;

	}

};

export default playtexts;
