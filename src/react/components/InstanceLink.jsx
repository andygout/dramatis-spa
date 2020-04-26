import React from 'react';
import { Link } from 'react-router-dom';

import { irregularPluralNounsMap } from '../../utils/constants';

export default function (props) {

	const { instance } = props;

	const model = instance.get('model');

	const instanceRoute = `/${irregularPluralNounsMap[model] || model + 's'}/${instance.get('uuid')}`;

	return (
		<Link to={instanceRoute}>
			{ instance.get('name') }
		</Link>
	);

};
