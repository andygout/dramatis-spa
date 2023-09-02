import {
	REQUEST_FESTIVALS,
	RECEIVE_FESTIVALS
} from '../utils/model-action-names';

const festivals = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_FESTIVALS:
			return action.payload;

		case REQUEST_FESTIVALS:
		default:
			return state;

	}

};

export default festivals;
