import PropTypes from 'prop-types';
import React from 'react';

import { JoinedRoles } from '.';

const AppendedRoles = props => {

	const { roles } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' … '}</React.Fragment>

			<JoinedRoles instances={roles} />

		</React.Fragment>
	);

};

AppendedRoles.propTypes = {
	roles: PropTypes.array.isRequired
};

export default AppendedRoles;
