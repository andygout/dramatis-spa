const AppendedFormatAndYear = props => {

	const { format, year } = props;

	const displayText = [format, year].filter(Boolean).join(', ');

	return (
		<>{` (${displayText})`}</>
	);

};

export default AppendedFormatAndYear;
