import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
	roles: ImmutablePropTypes.list.isRequired
};

export default AppendedRoles;
