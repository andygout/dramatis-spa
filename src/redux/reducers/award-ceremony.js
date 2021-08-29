import { Map, fromJS } from 'immutable';

import {
	REQUEST_AWARDCEREMONY,
	RECEIVE_AWARDCEREMONY
} from '../utils/model-action-names';

const awardCeremony = (state = Map(), action) => {

	switch (action.type) {

		case RECEIVE_AWARDCEREMONY:
			return fromJS(action.payload);

		case REQUEST_AWARDCEREMONY:
		default:
			return state;

	}

};

export default awardCeremony;
