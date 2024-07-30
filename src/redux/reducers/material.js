import {
	REQUEST_MATERIAL,
	RECEIVE_MATERIAL
} from '../utils/model-action-names.js';

const material = (state = {}, action) => {

	switch (action.type) {

		case RECEIVE_MATERIAL:
			return action.payload;

		case REQUEST_MATERIAL:
		default:
			return state;

	}

};

export default material;
