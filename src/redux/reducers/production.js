import { Map, fromJS } from 'immutable';

import {
	REQUEST_PRODUCTION,
	RECEIVE_PRODUCTION
} from '../utils/model-action-names';

const production = (state = Map({}), action) => {

	switch (action.type) {

		case RECEIVE_PRODUCTION:
			return fromJS(action.payload);

		case REQUEST_PRODUCTION:
		default:
			return state;

	}

};

export default production;
