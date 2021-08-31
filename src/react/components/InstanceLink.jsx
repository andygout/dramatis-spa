import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
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
	instance: PropTypes.instanceOf(Map).isRequired
};

export default InstanceLink;
