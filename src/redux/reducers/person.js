import {
	REQUEST_PERSON,
	RECEIVE_PERSON
} from '../utils/model-action-names';

const person = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_PERSON:
			return action.payload;

		case REQUEST_PERSON:
		default:
			return state;

	}

};

export default person;
