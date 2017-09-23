const getShowQuery = () => `
	MATCH (production:Production { uuid: $uuid })-[:PLAYS_AT]->(theatre:Theatre)
	OPTIONAL MATCH (production)-[playtextRel:PRODUCTION_OF]->(playtext:Playtext)
	OPTIONAL MATCH (production)<-[castRel:PERFORMS_IN]-(person:Person)
	OPTIONAL MATCH (person)-[roleRel:PERFORMS_AS { prodUuid: $uuid }]->(role:Role)
	OPTIONAL MATCH (role)<-[roleRel]-(person)-[castRel]->(production)-[playtextRel]->
		(playtext)-[:INCLUDES_CHARACTER]->(character:Character)
		WHERE role.name = character.name OR role.characterName = character.name
	WITH production, theatre, playtext, castRel, person, roleRel, role, character
	ORDER BY roleRel.position
	WITH production, theatre, playtext, castRel, person,
		CASE WHEN role IS NULL THEN [{ name: 'Performer' }] ELSE
		COLLECT({ model: 'character', uuid: character.uuid, name: role.name }) END AS roles
	ORDER BY castRel.position
	RETURN {
		model: 'production',
		uuid: production.uuid,
		name: production.name,
		theatre: { model: 'theatre', uuid: theatre.uuid, name: theatre.name },
		playtext: CASE WHEN playtext IS NULL THEN null ELSE
			{ model: 'playtext', uuid: playtext.uuid, name: playtext.name } END,
		cast: CASE WHEN person IS NULL THEN [] ELSE
			COLLECT({ model: 'person', uuid: person.uuid, name: person.name, roles: roles }) END
	} AS production
`;

export {
	getShowQuery
};
