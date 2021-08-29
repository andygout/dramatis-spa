import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

import { getRouteFromModel } from '../../lib/get-route';

const InstanceLink = props => {

	const { instance } = props;

	const model = instance.get('model');

	const uuid = instance.get('uuid');

	const instancePath = `/${getRouteFromModel(model)}/${uuid}`;

	return (
		<Link to={instancePath}>
			{ instance.get('name') }
		</Link>
	);

};

InstanceLink.propTypes = {
	instance: ImmutablePropTypes.map.isRequired
};

export default InstanceLink;
