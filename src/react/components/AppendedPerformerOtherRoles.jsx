import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { JoinedRoles } from '.';

const AppendedPerformerOtherRoles = props => {

	const { otherRoles } = props;

	return (
		<React.Fragment>

			<span>; also performed:&nbsp;</span>

			<JoinedRoles instances={otherRoles} />

		</React.Fragment>
	);

};

AppendedPerformerOtherRoles.propTypes = {
	otherRoles: ImmutablePropTypes.list.isRequired
};

export default AppendedPerformerOtherRoles;
