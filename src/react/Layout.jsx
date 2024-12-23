import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useMatch } from 'react-router-dom';

import { ErrorMessage, Footer, Header, Navigation } from './components/index.js';

const Layout = props => {

	const { path, documentTitle, error, children } = props;

	const match = useMatch(path);

	useEffect(() => {

		const { fetchData, dispatch } = props;

		if (fetchData) fetchData(dispatch, match);

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
	path: PropTypes.string.isRequired,
	documentTitle: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
	fetchData: PropTypes.func,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	error: state.error
});

export default connect(mapStateToProps)(Layout);
