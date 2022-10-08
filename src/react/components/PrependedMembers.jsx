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
	members: PropTypes.array.isRequired
};

export default PrependedMembers;
