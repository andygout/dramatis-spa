import {
	REQUEST_SEASONS,
	RECEIVE_SEASONS
} from '../utils/model-action-names';

const seasons = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_SEASONS:
			return action.payload;

		case REQUEST_SEASONS:
		default:
			return state;

	}

};

export default seasons;
