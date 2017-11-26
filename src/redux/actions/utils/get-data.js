import * as actions from './actions-list';
import createAction from '../base';
import { setError } from '../error';
import { irregularPluralNouns } from '../../../utils/constants';

const request = model => createAction(actions[`REQUEST_${model.toUpperCase()}`]);

const receive = (instance, model) => createAction(actions[`RECEIVE_${model.toUpperCase()}`], instance);

export default (dispatch, getState, model, opts) => {

	dispatch(setError({ exists: false, message: null }));

	const instance = opts.uuid ? true : false;

	const apiCallReqd = instance ?
		getState()[model].uuid !== opts.uuid :
		!getState()[model].length;

	if (apiCallReqd) {

		dispatch(request(model));

		let url = 'http://localhost:3000/';

		url += instance ?
			irregularPluralNouns[model] || model + 's' :
			model;

		if (instance) url += `/${opts.uuid}`;

		return fetch(url, { 'mode': 'cors' })
			.then(response => {

				if (response.status !== 200) throw new Error(response.statusText);

				return response.json();

			})
			.then(instance => dispatch(receive(instance, model)))
			.catch(({ message }) => dispatch(setError({ exists: true, message })));

	}

}
