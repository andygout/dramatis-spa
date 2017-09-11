const getShowQuery = () => `
	MATCH (theatre:Theatre { uuid: $uuid })
	OPTIONAL MATCH (theatre)<-[:PLAYS_AT]-(production:Production)
	WITH theatre,
		CASE WHEN production IS NULL THEN [] ELSE
		COLLECT({ model: 'production', uuid: production.uuid, name: production.name }) END AS productions
	RETURN {
		model: 'theatre',
		uuid: theatre.uuid,
		name: theatre.name,
		productions: productions
	} AS theatre
`;

export {
	getShowQuery
};
