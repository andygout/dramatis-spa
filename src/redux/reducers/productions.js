import { REQUEST_PRODUCTIONS, RECEIVE_PRODUCTIONS } from '../actions/utils/actions-list';

const productions = (state = [], action) => {

	switch (action.type) {

		case REQUEST_PRODUCTIONS:
			return state;

		case RECEIVE_PRODUCTIONS:
			return action.payload;

		default:
			return state;

	}

};

export default productions;
