import React from 'react';
import { Link } from 'react-router-dom';

import withInstanceRoute from '../utils/with-instance-route';

const InstanceLink = props => {

	const { instance, index, instanceRoute } = props;

	return (
		<Link key={index || null} to={`${instanceRoute}`}>
			{instance.name}
		</Link>
	);

};

export default withInstanceRoute(InstanceLink);
