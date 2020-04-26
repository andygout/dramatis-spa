import React from 'react';
import { Link } from 'react-router-dom';

import { irregularPluralNounsMap } from '../../utils/constants';

export default function (props) {

	const { instance } = props;

	const model = instance.get('model');
	const pluralisedModel = irregularPluralNounsMap[model] || model + 's';

	const uuid = instance.get('uuid');

	const instancePath = `/${pluralisedModel}/${uuid}`;

	return (
		<Link to={instancePath}>
			{ instance.get('name') }
		</Link>
	);

};
