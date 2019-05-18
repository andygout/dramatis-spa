import { List, fromJS } from 'immutable';

import { REQUEST_THEATRES, RECEIVE_THEATRES } from '../utils/model-actions';

const theatres = (state = List([]), action) => {

	switch (action.type) {

		case REQUEST_THEATRES:
			return state;

		case RECEIVE_THEATRES:
			return fromJS(action.payload);

		default:
			return state;

	}

};

export default theatres;
