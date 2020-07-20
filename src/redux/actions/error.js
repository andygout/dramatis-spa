import createAction from './base';

const SET_ERROR_STATUS = 'SET_ERROR_STATUS';
const RESET_ERROR_STATUS = 'RESET_ERROR_STATUS';

const setErrorStatus = error => createAction(SET_ERROR_STATUS, error);

const resetErrorStatus = () => (dispatch, getState) => {

	if (getState().getIn(['error', 'exists'])) {

		dispatch(createAction(RESET_ERROR_STATUS, { exists: false }));

	}

}

export {
	SET_ERROR_STATUS,
	RESET_ERROR_STATUS,
	setErrorStatus,
	resetErrorStatus
};
