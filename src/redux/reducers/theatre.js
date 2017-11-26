import { REQUEST_THEATRE, RECEIVE_THEATRE } from '../utils/model-actions';

const theatre = (state = {}, action) => {

	switch (action.type) {

		case REQUEST_THEATRE:
			return state;

		case RECEIVE_THEATRE:
			return action.payload;

		default:
			return state;

	}

};

export default theatre;
