export const formatDate = (dateString, customOptions = {}) => {

	const date = new Date(dateString);

	const defaultOptions = {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	};

	const options = Object.assign({}, defaultOptions, customOptions);

	// Server-side output: 'Sep'
	// Client-side output: 'Sept'.
	// Replacement applied to ensure consistency.
	return new Intl.DateTimeFormat('en-GB', options).format(date).replace('Sept', 'Sep');

};
