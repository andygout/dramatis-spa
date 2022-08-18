import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CommaSeparatedInstanceLinks } from '.';

const PrependedMembers = props => {

	const { members } = props;

	return (
		<React.Fragment>

			<CommaSeparatedInstanceLinks instances={members} />

			<React.Fragment>{' for '}</React.Fragment>

		</React.Fragment>
	);

};

PrependedMembers.propTypes = {
	members: ImmutablePropTypes.list.isRequired
};

export default PrependedMembers;
