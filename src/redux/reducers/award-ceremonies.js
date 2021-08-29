import { List, fromJS } from 'immutable';

import {
	REQUEST_AWARDCEREMONIES,
	RECEIVE_AWARDCEREMONIES
} from '../utils/model-action-names';

const awardCeremonies = (state = List(), action) => {

	switch (action.type) {

		case RECEIVE_AWARDCEREMONIES:
			return fromJS(action.payload);

		case REQUEST_AWARDCEREMONIES:
		default:
			return state;

	}

};

export default awardCeremonies;
