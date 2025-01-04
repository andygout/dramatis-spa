import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ErrorMessage, Footer, Header, Navigation } from './components/index.js';

const Layout = props => {

	const { documentTitle, children } = props;

	const dispatch = useDispatch();

	const error = useSelector(state => state.error);

	useEffect(() => {

		const { deactivateError } = props;

		if (deactivateError) dispatch(deactivateError());

	}, []);

	return (
		<>

			<Helmet
				defaultTitle='Dramatis'
				titleTemplate='%s | Dramatis'
				title={documentTitle()}
			/>

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

Layout.propTypes = {
	documentTitle: PropTypes.func.isRequired,
	deactivateError: PropTypes.func,
	children: PropTypes.node.isRequired
};

export default Layout;
