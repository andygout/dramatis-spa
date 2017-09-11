import dbQuery from '../database/db-query';
import { getShowQuery } from '../database/cypher-queries/production';
import { getListQuery } from '../database/cypher-queries/shared';
import Person from './person';
import Playtext from './playtext';
import Theatre from './theatre';

export default class Production {

	constructor (props = {}) {

		Object.defineProperty(this, 'model', {
			get: function () { return 'production'; }
		});

		this.uuid = props.uuid;
		this.name = props.name;
		this.pageTitle = props.pageTitle;
		this.documentTitle = props.documentTitle;
		this.theatre = new Theatre(props.theatre);
		this.playtext = new Playtext(props.playtext);
		this.cast = props.cast ?
			props.cast.filter(castMember => castMember.name.length).map(castMember => new Person(castMember)) :
			[];

	};

	show () {

		return dbQuery({ query: getShowQuery(), params: this });

	};

	static list () {

		return dbQuery({ query: getListQuery('production') });

	};

};
