import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CommaSeparatedInstanceLinks } from '.';

const AppendedCreativeEntities = props => {

	const { creativeEntities } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;…&nbsp;</React.Fragment>

			<CommaSeparatedInstanceLinks instances={creativeEntities} />

		</React.Fragment>
	);

};

AppendedCreativeEntities.propTypes = {
	creativeEntities: ImmutablePropTypes.list.isRequired
};

export default AppendedCreativeEntities;
