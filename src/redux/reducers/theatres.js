import { REQUEST_THEATRES, RECEIVE_THEATRES } from '../actions/theatres';

const theatres = (state = [], action) => {

	switch (action.type) {

		case REQUEST_THEATRES:
			return state;

		case RECEIVE_THEATRES:
			return action.payload;

		default:
			return state;

	}

};

export default theatres;
