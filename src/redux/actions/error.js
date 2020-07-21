import createAction from './base';
import {
	SET_ERROR_STATUS,
	RESET_ERROR_STATUS
} from '../utils/error-action-names';

const setErrorStatus = error => createAction(SET_ERROR_STATUS, error);

const resetErrorStatus = () => (dispatch, getState) => {

	if (getState().getIn(['error', 'exists'])) {

		dispatch(createAction(RESET_ERROR_STATUS, { exists: false }));

	}

};

export {
	setErrorStatus,
	resetErrorStatus
};
