import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CommaSeparatedInstanceLinks } from '.';

const AppendedCoWriters = props => {

	const { coWriters } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;(co-written with&nbsp;</React.Fragment>

			<CommaSeparatedInstanceLinks instances={coWriters} />

			<React.Fragment>)</React.Fragment>

		</React.Fragment>
	);

};

AppendedCoWriters.propTypes = {
	coWriters: ImmutablePropTypes.list.isRequired
};

export default AppendedCoWriters;
