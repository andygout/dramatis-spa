import createAction from './base.js';
import {
	ACTIVATE_ERROR,
	DEACTIVATE_ERROR
} from '../utils/error-action-names.js';

const activateError = errorData => createAction(ACTIVATE_ERROR, { isActive: true, ...errorData });

const deactivateError = () => (dispatch, getState) => {

	if (getState().error.isActive) {

		createAction(DEACTIVATE_ERROR, { isActive: false });

	}

};

export {
	activateError,
	deactivateError
};
