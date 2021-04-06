import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CreditedEntities } from '.';

const AppendedEntities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;…&nbsp;</React.Fragment>

			<CreditedEntities creditedEntities={entities} />

		</React.Fragment>
	);

};

AppendedEntities.propTypes = {
	entities: ImmutablePropTypes.list.isRequired
};

export default AppendedEntities;
