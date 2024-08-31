import PropTypes from 'prop-types';
import React from 'react';

import { JoinedRoles } from './index.js';

const AppendedRoles = props => {

	const { roles } = props;

	return (
		<>

			<>{' … '}</>

			<JoinedRoles instances={roles} />

		</>
	);

};

AppendedRoles.propTypes = {
	roles: PropTypes.array.isRequired
};

export default AppendedRoles;
