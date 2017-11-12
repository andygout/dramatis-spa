import createAction from './base';

const SET_ERROR_STATUS = 'SET_ERROR_STATUS';

const setError = errorState => createAction(SET_ERROR_STATUS, errorState);

export {
	SET_ERROR_STATUS,
	setError
};
