import dbQuery from '../database/db-query';
import { getShowQuery } from '../database/cypher-queries/playtext';
import { getListQuery } from '../database/cypher-queries/shared';
import Character from './character';

export default class Playtext {

	constructor (props = {}) {

		Object.defineProperty(this, 'model', {
			get: function () { return 'playtext'; }
		});

		this.uuid = props.uuid;
		this.name = props.name;
		this.pageTitle = props.pageTitle;
		this.characters = props.characters ?
			props.characters.filter(character => character.name.length).map(character => new Character(character)) :
			[];
		this.productions = [];

	};

	show () {

		return dbQuery({ query: getShowQuery(), params: this });

	};

	static list () {

		return dbQuery({ query: getListQuery('playtext') });

	};

};
