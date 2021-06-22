import PropTypes from 'prop-types';
import React from 'react';

const AppendedFormatAndYear = props => {

	const { format, year } = props;

	const displayText = [format, year].filter(Boolean).join(', ');

	return (
		<React.Fragment>&nbsp;({ displayText })</React.Fragment>
	);

};

AppendedFormatAndYear.propTypes = {
	format: PropTypes.string,
	year: PropTypes.number
};

export default AppendedFormatAndYear;
