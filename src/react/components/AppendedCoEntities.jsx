import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Entities } from '.';

const AppendedCoEntities = props => {

	const { coEntities } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' (with '}</React.Fragment>

			<Entities entities={coEntities} />

			<React.Fragment>{')'}</React.Fragment>

		</React.Fragment>
	);

};

AppendedCoEntities.propTypes = {
	coEntities: ImmutablePropTypes.list.isRequired
};

export default AppendedCoEntities;
