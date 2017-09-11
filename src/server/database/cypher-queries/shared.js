import { getShowQuery as getCharacterShowQuery } from './character';
import { getShowQuery as getPersonShowQuery } from './person';
import { getShowQuery as getTheatreShowQuery } from './theatre';
import capitalise from '../lib/capitalise';
import pluralise from '../lib/pluralise';

const getShowQueries = {
	character: getCharacterShowQuery,
	person: getPersonShowQuery,
	theatre: getTheatreShowQuery
};

const getListQuery = model => {

	const theatreRelationship = (model === 'production') ? '-[:PLAYS_AT]->(t:Theatre)' : '';

	const theatreObject = (model === 'production') ? ", theatre: { model: 'theatre', uuid: t.uuid, name: t.name }" : '';

	return `
		MATCH (n:${capitalise(model)})${theatreRelationship}
		RETURN COLLECT({
			model: '${model}',
			uuid: n.uuid,
			name: n.name
			${theatreObject}
		}) AS ${pluralise(model)}
	`;

};

export {
	getShowQueries,
	getListQuery
};
