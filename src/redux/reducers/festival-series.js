import {
	REQUEST_FESTIVAL_SERIES,
	RECEIVE_FESTIVAL_SERIES
} from '../utils/model-action-names';

const festivalSeries = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_FESTIVAL_SERIES:
			return action.payload;

		case REQUEST_FESTIVAL_SERIES:
		default:
			return state;

	}

};

export default festivalSeries;
