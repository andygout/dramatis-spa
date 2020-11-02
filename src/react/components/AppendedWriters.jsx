import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CommaSeparatedInstanceLinks } from '.';

const AppendedWriters = props => {

	const { writers } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;by&nbsp;</React.Fragment>

			<CommaSeparatedInstanceLinks instances={writers} />

		</React.Fragment>
	);

};

AppendedWriters.propTypes = {
	writers: ImmutablePropTypes.list.isRequired
};

export default AppendedWriters;
