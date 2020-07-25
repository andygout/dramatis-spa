import { Map, fromJS } from 'immutable';

import {
	REQUEST_PERSON,
	RECEIVE_PERSON
} from '../utils/model-action-names';

const person = (state = Map(), action) => {

	switch (action.type) {

		case RECEIVE_PERSON:
			return fromJS(action.payload);

		case REQUEST_PERSON:
		default:
			return state;

	}

};

export default person;
