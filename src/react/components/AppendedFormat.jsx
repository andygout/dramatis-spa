import PropTypes from 'prop-types';
import React from 'react';

const AppendedFormat = props => {

	const { format } = props;

	return (
		<React.Fragment>&nbsp;({ format })</React.Fragment>
	);

};

AppendedFormat.propTypes = {
	format: PropTypes.string
};

export default AppendedFormat;
