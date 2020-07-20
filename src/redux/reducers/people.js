import { List, fromJS } from 'immutable';

import {
	REQUEST_PEOPLE,
	RECEIVE_PEOPLE
} from '../utils/model-action-names';

const people = (state = List([]), action) => {

	switch (action.type) {

		case RECEIVE_PEOPLE:
			return fromJS(action.payload);

		case REQUEST_PEOPLE:
		default:
			return state;

	}

};

export default people;
