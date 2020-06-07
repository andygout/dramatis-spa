import React from 'react';
import { Link } from 'react-router-dom';

import pluraliseModel from '../../lib/pluralise-model';

export default function (props) {

	const { instance } = props;

	const model = instance.get('model');
	const pluralisedModel = pluraliseModel(model);

	const uuid = instance.get('uuid');

	const instancePath = `/${pluralisedModel}/${uuid}`;

	return (
		<Link to={instancePath}>
			{ instance.get('name') }
		</Link>
	);

};
