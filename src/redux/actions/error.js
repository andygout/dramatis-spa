import createAction from './base';

const SET_ERROR_STATUS = 'SET_ERROR_STATUS';
const RESET_ERROR_STATUS = 'RESET_ERROR_STATUS';

const setError = error => createAction(SET_ERROR_STATUS, error);

const resetError = () => (dispatch, getState) => {

	if (getState().getIn(['error', 'exists'])) {

		dispatch(createAction(RESET_ERROR_STATUS, { exists: false }));

	}

}

export {
	SET_ERROR_STATUS,
	RESET_ERROR_STATUS,
	setError,
	resetError
};
