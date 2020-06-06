import { List, fromJS } from 'immutable';

import { REQUEST_PRODUCTIONS, RECEIVE_PRODUCTIONS } from '../utils/model-actions';

const productions = (state = List([]), action) => {

	switch (action.type) {

		case RECEIVE_PRODUCTIONS:
			return fromJS(action.payload);

		case REQUEST_PRODUCTIONS:
		default:
			return state;

	}

};

export default productions;
