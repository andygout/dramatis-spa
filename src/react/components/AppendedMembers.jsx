import PropTypes from 'prop-types';
import React from 'react';

import { CommaSeparatedInstanceLinks } from './index.js';

const AppendedMembers = props => {

	const { members } = props;

	return (
		<>

			<>{' ('}</>

			<CommaSeparatedInstanceLinks instances={members} />

			<>{')'}</>

		</>
	);

};

AppendedMembers.propTypes = {
	members: PropTypes.array.isRequired
};

export default AppendedMembers;
