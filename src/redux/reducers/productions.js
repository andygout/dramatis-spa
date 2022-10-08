import {
	REQUEST_PRODUCTIONS,
	RECEIVE_PRODUCTIONS
} from '../utils/model-action-names';

const productions = (state = [], action) => {

	switch (action.type) {

		case RECEIVE_PRODUCTIONS:
			return action.payload;

		case REQUEST_PRODUCTIONS:
		default:
			return state;

	}

};

export default productions;
