import { List, fromJS } from 'immutable';

import { REQUEST_CHARACTERS, RECEIVE_CHARACTERS } from '../utils/model-actions';

const characters = (state = List([]), action) => {

	switch (action.type) {

		case REQUEST_CHARACTERS:
			return state;

		case RECEIVE_CHARACTERS:
			return fromJS(action.payload);

		default:
			return state;

	}

};

export default characters;
