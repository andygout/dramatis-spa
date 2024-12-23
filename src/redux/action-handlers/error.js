import { errorDeactivated } from '../actions';

const deactivateError = () => async (dispatch, getState) => {

	if (getState().error.isActive) {

		return dispatch(errorDeactivated());

	}

};

export {
	deactivateError
};
