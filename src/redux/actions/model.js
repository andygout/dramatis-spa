import createAction from './base';
import { setError } from './error';
import * as actions from '../utils/model-actions';
import { irregularPluralNounsMap } from '../../utils/constants';

const URL_BASE = 'http://localhost:3000';

const getPluralisedModel = model => irregularPluralNounsMap[model] || model + 's';

const request = model => createAction(actions[`REQUEST_${model.toUpperCase()}`]);

const receive = (instance, model) => createAction(actions[`RECEIVE_${model.toUpperCase()}`], instance);

export const fetchModel = (model, uuid = null) => async (dispatch, getState) => {

	const isInstance = uuid
		? true
		: false;

	const apiCallRequired = isInstance
		? getState().getIn([model, 'uuid']) !== uuid
		: !getState().get(model).size;

	if (apiCallRequired) {

		dispatch(request(model));

		let url = URL_BASE;

		url += isInstance
			? `/${getPluralisedModel(model)}`
			: `/${model}`;

		if (isInstance) url += `/${uuid}`;

		try {

			const response = await fetch(url, { mode: 'cors' });

			if (response.status !== 200) throw new Error(response.statusText);

			const instance = await response.json();

			dispatch(receive(instance, model));

		} catch ({ message }) {

			dispatch(setError({ exists: true, message }));

		}

	}

}
