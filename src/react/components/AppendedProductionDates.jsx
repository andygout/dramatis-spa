import PropTypes from 'prop-types';
import React from 'react';

import { formatDate } from '../../lib/format-date';

const AppendedProductionDates = props => {

	const { startDate, endDate } = props;

	const displayText = (() => {
		switch (true) {
			case Boolean(startDate) && Boolean(endDate):
				return `${formatDate(startDate)} to ${formatDate(endDate)}`;

			case Boolean(startDate) && !endDate:
				return `from ${formatDate(startDate)}`;

			case !startDate && Boolean(endDate):
				return `until ${formatDate(endDate)}`;
		}
	})();

	return (
		<React.Fragment>{` (${displayText})`}</React.Fragment>
	);

};

AppendedProductionDates.propTypes = {
	startDate: PropTypes.string,
	endDate: PropTypes.string
};

export default AppendedProductionDates;
