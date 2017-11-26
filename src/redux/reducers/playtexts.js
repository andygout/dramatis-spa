import { REQUEST_PLAYTEXTS, RECEIVE_PLAYTEXTS } from '../utils/model-actions';

const playtexts = (state = [], action) => {

	switch (action.type) {

		case REQUEST_PLAYTEXTS:
			return state;

		case RECEIVE_PLAYTEXTS:
			return action.payload;

		default:
			return state;

	}

};

export default playtexts;
