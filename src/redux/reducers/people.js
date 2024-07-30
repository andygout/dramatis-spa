import {
	REQUEST_PEOPLE,
	RECEIVE_PEOPLE
} from '../utils/model-action-names.js';

const people = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_PEOPLE:
			return action.payload;

		case REQUEST_PEOPLE:
		default:
			return state;

	}

};

export default people;
