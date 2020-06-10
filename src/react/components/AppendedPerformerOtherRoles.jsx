import React from 'react';

import { JoinedRoles } from '.';

export default props => {

	const { otherRoles } = props;

	return (
		<React.Fragment>

			<span>; also performed:&nbsp;</span>

			<JoinedRoles instances={otherRoles} />

		</React.Fragment>
	);

};
