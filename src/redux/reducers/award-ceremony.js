import {
	REQUEST_AWARD_CEREMONY,
	RECEIVE_AWARD_CEREMONY
} from '../utils/model-action-names.js';

const awardCeremony = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_AWARD_CEREMONY:
			return action.payload;

		case REQUEST_AWARD_CEREMONY:
		default:
			return state;

	}

};

export default awardCeremony;
