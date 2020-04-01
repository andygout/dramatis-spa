import React from 'react';
import { Link } from 'react-router-dom';

import { irregularPluralNouns } from '../../utils/constants';

const InstanceLink = props => {

	const { instance, index } = props;

	const model = instance.get('model');

	const instanceRoute = `/${irregularPluralNouns[model] || model + 's'}/${instance.get('uuid')}`;

	return (
		<Link key={index || null} to={instanceRoute}>
			{instance.get('name')}
		</Link>
	);

};

export default InstanceLink;
