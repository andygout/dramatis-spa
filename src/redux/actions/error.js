import { getIn } from '../../lib/object-interactions';
import createAction from './base';
import {
	ACTIVATE_ERROR,
	DEACTIVATE_ERROR
} from '../utils/error-action-names';

const activateError = errorData => createAction(ACTIVATE_ERROR, { isActive: true, ...errorData });

const deactivateError = () => (dispatch, getState) => {

	if (getIn(getState(), ['error', 'isActive'])) {

		createAction(DEACTIVATE_ERROR, { isActive: false });

	}

};

export {
	activateError,
	deactivateError
};
