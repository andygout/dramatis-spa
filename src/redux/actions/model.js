import createAction from './base';
import { setError } from './error';
import * as actions from '../utils/model-actions';
import { irregularPluralNouns } from '../../utils/constants';

const request = model => createAction(actions[`REQUEST_${model.toUpperCase()}`]);

const receive = (instance, model) => createAction(actions[`RECEIVE_${model.toUpperCase()}`], instance);

export default (model, uuid = null) => (dispatch, getState) => {

	const instance = uuid ? true : false;

	const apiCallReqd = instance ?
		getState()[model].uuid !== uuid :
		!getState()[model].length;

	if (apiCallReqd) {

		dispatch(request(model));

		let url = 'http://localhost:3000/';

		url += instance ?
			irregularPluralNouns[model] || model + 's' :
			model;

		if (instance) url += `/${uuid}`;

		return fetch(url, { 'mode': 'cors' })
			.then(response => {

				if (response.status !== 200) throw new Error(response.statusText);

				return response.json();

			})
			.then(instance => dispatch(receive(instance, model)))
			.catch(({ message }) => dispatch(setError({ exists: true, message })));

	}

}
