import PropTypes from 'prop-types';
import React from 'react';

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
