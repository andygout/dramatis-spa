import dbQuery from '../database/db-query';
import Base from './base';

export default class Theatre extends Base {

	constructor (props = {}) {

		super(props);

		Object.defineProperty(this, 'model', {
			get: function () { return 'theatre'; }
		});

		this.productions = [];

	};

};
