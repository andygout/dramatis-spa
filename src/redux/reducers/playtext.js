import { Map, fromJS } from 'immutable';

import { REQUEST_PLAYTEXT, RECEIVE_PLAYTEXT } from '../utils/model-actions';

const playtext = (state = Map({}), action) => {

	switch (action.type) {

		case RECEIVE_PLAYTEXT:
			return fromJS(action.payload);

		case REQUEST_PLAYTEXT:
		default:
			return state;

	}

};

export default playtext;
