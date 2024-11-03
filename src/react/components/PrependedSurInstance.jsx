import PropTypes from 'prop-types';

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

PrependedSurInstance.propTypes = {
	surInstance: PropTypes.object.isRequired
};

export default PrependedSurInstance;
