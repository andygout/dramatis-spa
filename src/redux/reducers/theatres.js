import { List, fromJS } from 'immutable';

import {
	REQUEST_THEATRES,
	RECEIVE_THEATRES
} from '../utils/model-action-names';

const theatres = (state = List([]), action) => {

	switch (action.type) {

		case RECEIVE_THEATRES:
			return fromJS(action.payload);

		case REQUEST_THEATRES:
		default:
			return state;

	}

};

export default theatres;
