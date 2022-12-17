import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink } from '.';

const PrependedSurInstance = props => {

	const { surInstance } = props;

	return (
		<React.Fragment>

			<InstanceLink instance={surInstance} />

			<React.Fragment>{': '}</React.Fragment>

		</React.Fragment>
	);

};

PrependedSurInstance.propTypes = {
	surInstance: PropTypes.object.isRequired
};

export default PrependedSurInstance;
