import createAction from './base';
import { setError } from './error';
import * as actions from '../utils/model-actions';
import { irregularPluralNouns } from '../../utils/constants';

const request = model => createAction(actions[`REQUEST_${model.toUpperCase()}`]);

const receive = (instance, model) => createAction(actions[`RECEIVE_${model.toUpperCase()}`], instance);

export default (model, uuid = null) => async (dispatch, getState) => {

	const instance = uuid
		? true
		: false;

	const apiCallRequired = instance
		? getState().getIn([model, 'uuid']) !== uuid
		: !getState().get(model).size;

	if (apiCallRequired) {

		dispatch(request(model));

		let url = 'http://localhost:3000/';

		url += instance
			? irregularPluralNouns[model] || model + 's'
			: model;

		if (instance) url += `/${uuid}`;

		try {

			const response = await fetch(url, { 'mode': 'cors' });

			if (response.status !== 200) throw new Error(response.statusText);

			const instance = await response.json();

			dispatch(receive(instance, model));

		} catch ({ message }) {

			dispatch(setError({ exists: true, message }));

		}

	}

}
