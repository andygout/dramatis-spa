const getDocumentTitle = pageTitle => {

	const websiteName = 'Dramatis';

	const documentTitle =
		[pageTitle, websiteName]
			.filter(Boolean)
			.join(' | ');

	return documentTitle;

};

export default getDocumentTitle;
