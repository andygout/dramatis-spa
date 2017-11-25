import { REQUEST_THEATRE, RECEIVE_THEATRE } from '../actions/utils/actions-list';

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
