import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

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
	members: PropTypes.instanceOf(List).isRequired
};

export default PrependedMembers;
