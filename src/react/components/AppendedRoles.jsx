import React from 'react';

import { JoinedRoles } from '.';

export default props => {

	const { roles } = props;

	return (
		<React.Fragment>

			<span>&nbsp;…&nbsp;</span>

			<JoinedRoles instances={roles} />

		</React.Fragment>
	);

};
