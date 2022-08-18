import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CommaSeparatedInstanceLinks } from '.';

const AppendedMembers = props => {

	const { members } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' ('}</React.Fragment>

			<CommaSeparatedInstanceLinks instances={members} />

			<React.Fragment>{')'}</React.Fragment>

		</React.Fragment>
	);

};

AppendedMembers.propTypes = {
	members: ImmutablePropTypes.list.isRequired
};

export default AppendedMembers;
