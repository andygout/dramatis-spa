import * as actions from '../actions/index.js';
import {
	MODEL_TO_PROP_NAME_MAP,
	MODEL_TO_ROUTE_MAP,
	PLURALISED_MODEL_TO_PROP_NAME_MAP,
	PLURALISED_MODEL_TO_ROUTE_MAP
} from '../../utils/constants.js';

const API_URL_BASE = 'http://localhost:3000';

const performFetch = async url => {

	const response = await fetch(url, { mode: 'cors' });

	if (response.status !== 200) throw new Error(response.statusText);

	return response.json();

};

const fetchList = pluralisedModel => async (dispatch, getState) => {

	const pluralisedModelPropName = PLURALISED_MODEL_TO_PROP_NAME_MAP[pluralisedModel];

	const apiCallRequired = !getState()[pluralisedModelPropName].length;

	if (apiCallRequired) {

		const apiUrl = `${API_URL_BASE}/${PLURALISED_MODEL_TO_ROUTE_MAP[pluralisedModel]}`;

		try {

			const list = await performFetch(apiUrl);

			dispatch(actions[`${pluralisedModelPropName}Fetched`](list));

		} catch ({ message }) {

			dispatch(actions.errorActivated({ message }));

		}

	}

};

const fetchInstance = (model, uuid) => async (dispatch, getState) => {

	const modelPropName = MODEL_TO_PROP_NAME_MAP[model];

	const apiCallRequired = getState()[modelPropName].uuid !== uuid;

	if (apiCallRequired) {

		const apiUrl = `${API_URL_BASE}/${MODEL_TO_ROUTE_MAP[model]}/${uuid}`;

		try {

			const instance = await performFetch(apiUrl);

			dispatch(actions[`${modelPropName}Fetched`](instance));

		} catch ({ message }) {

			dispatch(actions.errorActivated({ message }));

		}

	}

};

export {
	fetchList,
	fetchInstance
};
