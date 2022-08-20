import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Entities } from '.';

const AppendedEntities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' … '}</React.Fragment>

			<Entities entities={entities} />

		</React.Fragment>
	);

};

AppendedEntities.propTypes = {
	entities: ImmutablePropTypes.list.isRequired
};

export default AppendedEntities;
