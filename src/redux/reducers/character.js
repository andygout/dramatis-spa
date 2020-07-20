import { Map, fromJS } from 'immutable';

import {
	REQUEST_CHARACTER,
	RECEIVE_CHARACTER
} from '../utils/model-action-names';

const character = (state = Map({}), action) => {

	switch (action.type) {

		case RECEIVE_CHARACTER:
			return fromJS(action.payload);

		case REQUEST_CHARACTER:
		default:
			return state;

	}

};

export default character;
