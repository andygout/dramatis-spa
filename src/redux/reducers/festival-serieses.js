import {
	REQUEST_FESTIVAL_SERIESES,
	RECEIVE_FESTIVAL_SERIESES
} from '../utils/model-action-names.js';

const festivalSerieses = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_FESTIVAL_SERIESES:
			return action.payload;

		case REQUEST_FESTIVAL_SERIESES:
		default:
			return state;

	}

};

export default festivalSerieses;
