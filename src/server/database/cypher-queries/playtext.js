const getShowQuery = () => `
	MATCH (playtext:Playtext { uuid: $uuid })
	OPTIONAL MATCH (playtext)-[charRel:INCLUDES_CHARACTER]->(character:Character)
	OPTIONAL MATCH (playtext)<-[:PRODUCTION_OF]-(production:Production)-[:PLAYS_AT]->(theatre:Theatre)
	WITH playtext, charRel, character, production, theatre
	ORDER BY charRel.position
	WITH playtext, production, theatre,
		CASE WHEN character IS NULL THEN [] ELSE
		COLLECT({ model: 'character', uuid: character.uuid, name: character.name }) END AS characters
	RETURN {
		model: 'playtext',
		uuid: playtext.uuid,
		name: playtext.name,
		characters: characters,
		productions: CASE WHEN production IS NULL THEN [] ELSE
			COLLECT({
				model: 'production',
				uuid: production.uuid,
				name: production.name,
				theatre: { model: 'theatre', uuid: theatre.uuid, name: theatre.name }
			}) END
	} AS playtext
`;

export {
	getShowQuery
};
