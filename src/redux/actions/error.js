import createAction from './base';

const SET_ERROR = 'SET_ERROR';

const setError = errorState => createAction(SET_ERROR, errorState);

export {
	SET_ERROR,
	setError
};
