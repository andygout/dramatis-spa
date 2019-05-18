import { Map, fromJS } from 'immutable';

import { REQUEST_CHARACTER, RECEIVE_CHARACTER } from '../utils/model-actions';

const character = (state = Map({}), action) => {

	switch (action.type) {

		case REQUEST_CHARACTER:
			return state;

		case RECEIVE_CHARACTER:
			return fromJS(action.payload);

		default:
			return state;

	}

};

export default character;
