import {
	REQUEST_FESTIVAL,
	RECEIVE_FESTIVAL
} from '../utils/model-action-names';

const festival = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_FESTIVAL:
			return action.payload;

		case REQUEST_FESTIVAL:
		default:
			return state;

	}

};

export default festival;
