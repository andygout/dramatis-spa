import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

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
	members: PropTypes.instanceOf(List).isRequired
};

export default AppendedMembers;
