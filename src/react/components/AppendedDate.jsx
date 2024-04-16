import PropTypes from 'prop-types';
import React from 'react';

import { formatDate } from '../../lib/format-date';

const AppendedDate = props => {

	const { date } = props;

	return (
		<>
			{` (${formatDate(date)})`}
		</>
	);

};

AppendedDate.propTypes = {
	date: PropTypes.string.isRequired
};

export default AppendedDate;
