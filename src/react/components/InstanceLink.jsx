import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

import { MODEL_TO_ROUTE_MAP } from '../../utils/constants';

const InstanceLink = props => {

	const { instance } = props;

	const model = instance.get('model');

	const uuid = instance.get('uuid');

	const instancePath = `/${MODEL_TO_ROUTE_MAP[model]}/${uuid}`;

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
