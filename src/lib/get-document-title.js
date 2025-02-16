export default pageTitle => {

	const websiteName = 'Dramatis';

	const documentTitle =
		[pageTitle, websiteName]
			.filter(Boolean)
			.join(' | ');

	return documentTitle;

};
