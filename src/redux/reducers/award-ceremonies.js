import { List, fromJS } from 'immutable';

import {
	REQUEST_AWARD_CEREMONIES,
	RECEIVE_AWARD_CEREMONIES
} from '../utils/model-action-names';

const awardCeremonies = (state = List(), action) => {

	switch (action.type) {

		case RECEIVE_AWARD_CEREMONIES:
			return fromJS(action.payload);

		case REQUEST_AWARD_CEREMONIES:
		default:
			return state;

	}

};

export default awardCeremonies;
