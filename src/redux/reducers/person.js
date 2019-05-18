import { Map, fromJS } from 'immutable';

import { REQUEST_PERSON, RECEIVE_PERSON } from '../utils/model-actions';

const person = (state = Map({}), action) => {

	switch (action.type) {

		case REQUEST_PERSON:
			return state;

		case RECEIVE_PERSON:
			return fromJS(action.payload);

		default:
			return state;

	}

};

export default person;
