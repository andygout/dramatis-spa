import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { JoinedRoles } from '.';

const AppendedRoles = props => {

	const { roles } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;…&nbsp;</React.Fragment>

			<JoinedRoles instances={roles} />

		</React.Fragment>
	);

};

AppendedRoles.propTypes = {
	roles: PropTypes.instanceOf(List).isRequired
};

export default AppendedRoles;
