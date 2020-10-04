import PropTypes from 'prop-types';
import React from 'react';

const AppendedDisplayName = props => {

	const { displayName } = props;

	return (
		<span> (as <span className="role-text">{ displayName }</span>)</span>
	);

};

AppendedDisplayName.propTypes = {
	displayName: PropTypes.string.isRequired
};

export default AppendedDisplayName;
