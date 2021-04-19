import PropTypes from 'prop-types';
import React from 'react';

import { formatDate } from '../../lib/format-date';

const AppendedProductionDates = props => {

	const { startDate, endDate } = props;

	return (
		<React.Fragment>&nbsp;({ formatDate(startDate) } to { formatDate(endDate) })</React.Fragment>
	);

};

AppendedProductionDates.propTypes = {
	startDate: PropTypes.string,
	endDate: PropTypes.string
};

export default AppendedProductionDates;
