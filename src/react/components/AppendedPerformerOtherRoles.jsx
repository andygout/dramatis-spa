import PropTypes from 'prop-types';
import React from 'react';

import { JoinedRoles } from '.';

const AppendedPerformerOtherRoles = props => {

	const { otherRoles } = props;

	return (
		<React.Fragment>

			<React.Fragment>{'; also performed: '}</React.Fragment>

			<JoinedRoles instances={otherRoles} />

		</React.Fragment>
	);

};

AppendedPerformerOtherRoles.propTypes = {
	otherRoles: PropTypes.array.isRequired
};

export default AppendedPerformerOtherRoles;
