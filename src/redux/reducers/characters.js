import { List, fromJS } from 'immutable';

import {
	REQUEST_CHARACTERS,
	RECEIVE_CHARACTERS
} from '../utils/model-action-names';

const characters = (state = List([]), action) => {

	switch (action.type) {

		case RECEIVE_CHARACTERS:
			return fromJS(action.payload);

		case REQUEST_CHARACTERS:
		default:
			return state;

	}

};

export default characters;
