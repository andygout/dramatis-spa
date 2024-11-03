import PropTypes from 'prop-types';

import Entities from './Entities.jsx';

const AppendedEntities = props => {

	const { entities } = props;

	return (
		<>

			<>{' … '}</>

			<Entities entities={entities} />

		</>
	);

};

AppendedEntities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default AppendedEntities;
