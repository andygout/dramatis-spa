import PropTypes from 'prop-types';
import React from 'react';

const AppendedQualifier = props => {

	const { qualifier } = props;

	return (
		<React.Fragment>

			{` (${qualifier})`}

		</React.Fragment>
	);

};

AppendedQualifier.propTypes = {
	qualifier: PropTypes.string.isRequired
};

export default AppendedQualifier;
