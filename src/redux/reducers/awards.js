import {
	REQUEST_AWARDS,
	RECEIVE_AWARDS
} from '../utils/model-action-names';

const awards = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_AWARDS:
			return action.payload;

		case REQUEST_AWARDS:
		default:
			return state;

	}

};

export default awards;
