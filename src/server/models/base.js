import dbQuery from '../database/db-query';
import { getShowQueries, getListQuery } from '../database/cypher-queries/shared';

const resolvePromiseWithInstance = instance => {

	const instanceObject = {};

	instanceObject[instance.model] = instance;

	return Promise.resolve(instanceObject);

};

export default class Base {

	constructor (props = {}) {

		this.uuid = props.uuid;
		this.name = props.name;
		this.pageTitle = props.pageTitle;

	};

	show () {

		return dbQuery({ query: getShowQueries[this.model](), params: this });

	};

	static list (model) {

		return dbQuery({ query: getListQuery(model) });

	};

};
