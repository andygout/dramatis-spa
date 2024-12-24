import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ErrorMessage, Footer, Header, Navigation } from './components/index.js';

const Layout = props => {

	const { documentTitle, error, children } = props;

	useEffect(() => {

		const { deactivateError, dispatch } = props;

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
	deactivateError: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired
};

const mapStateToProps = state => ({
	error: state.error
});

export default connect(mapStateToProps)(Layout);
