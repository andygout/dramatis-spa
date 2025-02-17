import InstanceLink from './InstanceLink.jsx';

const PrependedSurInstance = props => {

	const { surInstance } = props;

	return (
		<>

			<InstanceLink instance={surInstance} />

			<>{': '}</>

		</>
	);

};

export default PrependedSurInstance;
