import PropTypes from 'prop-types';

import { formatDate } from '../../lib/format-date.js';

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
