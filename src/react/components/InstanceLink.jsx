import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { MODEL_TO_ROUTE_MAP } from '../../utils/constants';

const InstanceLink = props => {

	const { instance } = props;

	const model = instance.model;

	const uuid = instance.uuid;

	const instancePath = `/${MODEL_TO_ROUTE_MAP[model]}/${uuid}`;

	return (
		<Link to={instancePath}>
			{ instance.name }
		</Link>
	);

};

InstanceLink.propTypes = {
	instance: PropTypes.object.isRequired
};

export default InstanceLink;
