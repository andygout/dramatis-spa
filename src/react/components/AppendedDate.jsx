import { formatDate } from '../../lib/format-date.js';

const AppendedDate = props => {

	const { date } = props;

	return (
		<>
			{` (${formatDate(date)})`}
		</>
	);

};

export default AppendedDate;
