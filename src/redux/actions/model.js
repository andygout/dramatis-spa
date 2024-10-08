import createAction from './base.js';
import { activateError } from './error.js';
import * as actions from '../utils/model-action-names.js';
import {
	MODEL_TO_PROP_NAME_MAP,
	MODEL_TO_ROUTE_MAP,
	PLURALISED_MODEL_TO_PROP_NAME_MAP,
	PLURALISED_MODEL_TO_ROUTE_MAP
} from '../../utils/constants.js';

const API_URL_BASE = 'http://localhost:3000';

const requestList = pluralisedModel =>
	createAction(actions[`REQUEST_${pluralisedModel}`]);

const receiveList = (list, pluralisedModel) =>
	createAction(actions[`RECEIVE_${pluralisedModel}`], list);

const requestInstance = model =>
	createAction(actions[`REQUEST_${model}`]);

const receiveInstance = instance =>
	createAction(actions[`RECEIVE_${instance.model}`], instance);

const performFetch = async url => {

	const response = await fetch(url, { mode: 'cors' });

	if (response.status !== 200) throw new Error(response.statusText);

	return response.json();

};

const fetchList = pluralisedModel => async (dispatch, getState) => {

	const apiCallRequired = !getState()[PLURALISED_MODEL_TO_PROP_NAME_MAP[pluralisedModel]].length;

	if (apiCallRequired) {

		dispatch(requestList(pluralisedModel));

		const apiUrl = `${API_URL_BASE}/${PLURALISED_MODEL_TO_ROUTE_MAP[pluralisedModel]}`;

		try {

			const list = await performFetch(apiUrl);

			dispatch(receiveList(list, pluralisedModel));

		} catch ({ message }) {

			dispatch(activateError({ message }));

		}

	}

};

const fetchInstance = (model, uuid) => async (dispatch, getState) => {

	const apiCallRequired = getState()[MODEL_TO_PROP_NAME_MAP[model]].uuid !== uuid;

	if (apiCallRequired) {

		dispatch(requestInstance(model));

		const apiUrl = `${API_URL_BASE}/${MODEL_TO_ROUTE_MAP[model]}/${uuid}`;

		try {

			const instance = await performFetch(apiUrl);

			dispatch(receiveInstance(instance));

		} catch ({ message }) {

			dispatch(activateError({ message }));

		}

	}

};

export {
	fetchList,
	fetchInstance
};
