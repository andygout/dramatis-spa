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

export default AppendedMembers;
