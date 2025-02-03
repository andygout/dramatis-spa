import { NavLink } from 'react-router';

import { MODEL_TO_ROUTE_MAP } from '../../utils/constants.js';

const InstanceLink = props => {

	const { instance } = props;

	const model = instance.model;

	const uuid = instance.uuid;

	const instancePath = `/${MODEL_TO_ROUTE_MAP[model]}/${uuid}`;

	return (
		<NavLink to={instancePath}>
			{ instance.name }
		</NavLink>
	);

};

export default InstanceLink;
