import { List, fromJS } from 'immutable';

import {
	REQUEST_AWARDS,
	RECEIVE_AWARDS
} from '../utils/model-action-names';

const awards = (state = List(), action) => {

	switch (action.type) {

		case RECEIVE_AWARDS:
			return fromJS(action.payload);

		case REQUEST_AWARDS:
		default:
			return state;

	}

};

export default awards;
