import nodeFetch from 'node-fetch';

import { pluralise } from '../../lib/strings';
import createAction from './base';
import { receiveError } from './error';
import * as actions from '../utils/model-action-names';

const URL_BASE = 'http://localhost:3000';

const requestList = pluralisedModel =>
	createAction(actions[`REQUEST_${pluralisedModel.toUpperCase()}`]);

const receiveList = (list, pluralisedModel) =>
	createAction(actions[`RECEIVE_${pluralisedModel.toUpperCase()}`], list);

const requestInstance = model =>
	createAction(actions[`REQUEST_${model.toUpperCase()}`]);

const receiveInstance = instance =>
	createAction(actions[`RECEIVE_${instance.model.toUpperCase()}`], instance);

const performFetch = async url => {

	const fetch = global.fetch || nodeFetch;

	const response = await fetch(url, { mode: 'cors' });

	if (response.status !== 200) throw new Error(response.statusText);

	return response.json();

};

const fetchList = pluralisedModel => async (dispatch, getState) => {

	const apiCallRequired = !getState().get(pluralisedModel).size;

	if (apiCallRequired) {

		dispatch(requestList(pluralisedModel));

		const url = `${URL_BASE}/${pluralisedModel}`;

		try {

			const list = await performFetch(url);

			dispatch(receiveList(list, pluralisedModel));

		} catch ({ message }) {

			dispatch(receiveError({ isExistent: true, message }));

		}

	}

};

const fetchInstance = (model, uuid) => async (dispatch, getState) => {

	const apiCallRequired = getState().getIn([model, 'uuid']) !== uuid;

	if (apiCallRequired) {

		dispatch(requestInstance(model));

		const url = `${URL_BASE}/${pluralise(model)}/${uuid}`;

		try {

			const instance = await performFetch(url);

			dispatch(receiveInstance(instance));

		} catch ({ message }) {

			dispatch(receiveError({ isExistent: true, message }));

		}

	}

};

export {
	fetchList,
	fetchInstance
};
