import { REQUEST_PEOPLE, RECEIVE_PEOPLE } from '../utils/actions-list';

const people = (state = [], action) => {

	switch (action.type) {

		case REQUEST_PEOPLE:
			return state;

		case RECEIVE_PEOPLE:
			return action.payload;

		default:
			return state;

	}

};

export default people;
