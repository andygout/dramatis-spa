import { Map, fromJS } from 'immutable';

import {
	REQUEST_MATERIAL,
	RECEIVE_MATERIAL
} from '../utils/model-action-names';

const material = (state = Map(), action) => {

	switch (action.type) {

		case RECEIVE_MATERIAL:
			return fromJS(action.payload);

		case REQUEST_MATERIAL:
		default:
			return state;

	}

};

export default material;
