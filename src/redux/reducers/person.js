import { REQUEST_PERSON, RECEIVE_PERSON } from '../utils/model-actions';

const person = (state = {}, action) => {

	switch (action.type) {

		case REQUEST_PERSON:
			return state;

		case RECEIVE_PERSON:
			return action.payload;

		default:
			return state;

	}

};

export default person;
