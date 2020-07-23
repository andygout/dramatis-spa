import PropTypes from 'prop-types';
import React from 'react';

const InstanceLabel = props => {

	const { text } = props;

	return (
		<div className="instance-label">
			{ text }
		</div>
	);

};

InstanceLabel.propTypes = {
	text: PropTypes.string.isRequired
};

export default InstanceLabel;
