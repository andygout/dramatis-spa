import { List, fromJS } from 'immutable';

import {
	REQUEST_MATERIALS,
	RECEIVE_MATERIALS
} from '../utils/model-action-names';

const materials = (state = List(), action) => {

	switch (action.type) {

		case RECEIVE_MATERIALS:
			return fromJS(action.payload);

		case REQUEST_MATERIALS:
		default:
			return state;

	}

};

export default materials;
