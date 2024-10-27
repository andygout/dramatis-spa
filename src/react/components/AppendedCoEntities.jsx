import PropTypes from 'prop-types';

import { Entities } from './index.js';

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

AppendedCoEntities.propTypes = {
	coEntities: PropTypes.array.isRequired
};

export default AppendedCoEntities;
