import React from 'react';
import { Link } from 'react-router-dom';

import { irregularPluralNouns } from '../../utils/constants';

const InstanceLink = props => {

	const { instance, index } = props;

	const { model, uuid } = instance;

	const instanceRoute = `/${irregularPluralNouns[model] || model + 's'}/${uuid}`;

	return (
		<Link key={index || null} to={instanceRoute}>
			{instance.name}
		</Link>
	);

};

export default InstanceLink;
