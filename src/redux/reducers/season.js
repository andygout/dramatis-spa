import {
	REQUEST_SEASON,
	RECEIVE_SEASON
} from '../utils/model-action-names.js';

const season = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_SEASON:
			return action.payload;

		case REQUEST_SEASON:
		default:
			return state;

	}

};

export default season;
