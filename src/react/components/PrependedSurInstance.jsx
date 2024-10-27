import PropTypes from 'prop-types';

import { InstanceLink } from './index.js';

const PrependedSurInstance = props => {

	const { surInstance } = props;

	return (
		<>

			<InstanceLink instance={surInstance} />

			<>{': '}</>

		</>
	);

};

PrependedSurInstance.propTypes = {
	surInstance: PropTypes.object.isRequired
};

export default PrependedSurInstance;
