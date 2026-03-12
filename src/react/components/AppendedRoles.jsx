import JoinedRoles from './JoinedRoles.jsx';

const AppendedRoles = (props) => {
	const { roles } = props;

	return (
		<>
			<>{' … '}</>

			<JoinedRoles instances={roles} />
		</>
	);
};

export default AppendedRoles;
