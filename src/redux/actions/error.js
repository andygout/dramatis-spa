import createAction from './base';

const SET_ERROR_STATUS = 'SET_ERROR_STATUS';

const setError = error => createAction(SET_ERROR_STATUS, error);

export {
	SET_ERROR_STATUS,
	setError
};
