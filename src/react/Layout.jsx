import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getDocumentTitle from '../lib/get-document-title.js';
import { ErrorMessage, Footer, Header, Navigation } from './components/index.js';

const Layout = props => {

	const { pageTitle, children } = props;

	const documentTitle = getDocumentTitle(pageTitle);

	const dispatch = useDispatch();

	const error = useSelector(state => state.error);

	useEffect(() => {

		const { deactivateError } = props;

		if (deactivateError) dispatch(deactivateError());

	}, []);

	return (
		<>

			<title>{documentTitle}</title>

			<Header />

			<Navigation />

			<main className="main-content">

				{
					error.isActive
						? <ErrorMessage errorText={error.message} />
						: children
				}

			</main>

			<Footer />

		</>
	);

};

export default Layout;
