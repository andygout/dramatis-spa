import PropTypes from 'prop-types';

import CommaSeparatedInstanceLinks from './CommaSeparatedInstanceLinks.jsx';

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
