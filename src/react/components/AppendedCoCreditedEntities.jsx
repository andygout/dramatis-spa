import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CommaSeparatedInstanceLinks } from '.';

const AppendedCoCreditedEntities = props => {

	const { coCreditedEntities } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;(with&nbsp;</React.Fragment>

			<CommaSeparatedInstanceLinks instances={coCreditedEntities} />

			<React.Fragment>)</React.Fragment>

		</React.Fragment>
	);

};

AppendedCoCreditedEntities.propTypes = {
	coCreditedEntities: ImmutablePropTypes.list.isRequired
};

export default AppendedCoCreditedEntities;
