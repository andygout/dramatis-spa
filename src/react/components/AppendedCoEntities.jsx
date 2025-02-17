import Entities from './Entities.jsx';

const AppendedCoEntities = props => {

	const { coEntities } = props;

	return (
		<>

			<>{' (with '}</>

			<Entities entities={coEntities} />

			<>{')'}</>

		</>
	);

};

export default AppendedCoEntities;
