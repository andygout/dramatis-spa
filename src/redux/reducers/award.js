import { Map, fromJS } from 'immutable';

import {
	REQUEST_AWARD,
	RECEIVE_AWARD
} from '../utils/model-action-names';

const award = (state = Map(), action) => {

	switch (action.type) {

		case RECEIVE_AWARD:
			return fromJS(action.payload);

		case REQUEST_AWARD:
		default:
			return state;

	}

};

export default award;
