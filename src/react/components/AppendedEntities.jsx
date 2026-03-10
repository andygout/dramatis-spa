import Entities from './Entities.jsx';

const AppendedEntities = (props) => {
	const { entities } = props;

	return (
		<>
			<>{' … '}</>

			<Entities entities={entities} />
		</>
	);
};

export default AppendedEntities;
