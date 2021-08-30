import { Map, fromJS } from 'immutable';

import {
	REQUEST_AWARD_CEREMONY,
	RECEIVE_AWARD_CEREMONY
} from '../utils/model-action-names';

const awardCeremony = (state = Map(), action) => {

	switch (action.type) {

		case RECEIVE_AWARD_CEREMONY:
			return fromJS(action.payload);

		case REQUEST_AWARD_CEREMONY:
		default:
			return state;

	}

};

export default awardCeremony;
