import PropTypes from 'prop-types';
import React from 'react';

import { MODEL_TO_DISPLAY_NAME_MAP } from '../../utils/constants';

const InstanceLabel = props => {

	const { model } = props;

	return (
		<div className="instance-label">
			{ MODEL_TO_DISPLAY_NAME_MAP[model] }
		</div>
	);

};

InstanceLabel.propTypes = {
	model: PropTypes.string.isRequired
};

export default InstanceLabel;
