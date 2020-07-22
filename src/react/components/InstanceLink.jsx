import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

import { pluralise } from '../../lib/strings';

const InstanceLink = props => {

	const { instance } = props;

	const model = instance.get('model');
	const pluralisedModel = pluralise(model);

	const uuid = instance.get('uuid');

	const instancePath = `/${pluralisedModel}/${uuid}`;

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
