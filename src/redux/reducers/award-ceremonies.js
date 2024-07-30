import {
	REQUEST_AWARD_CEREMONIES,
	RECEIVE_AWARD_CEREMONIES
} from '../utils/model-action-names.js';

const awardCeremonies = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_AWARD_CEREMONIES:
			return action.payload;

		case REQUEST_AWARD_CEREMONIES:
		default:
			return state;

	}

};

export default awardCeremonies;
