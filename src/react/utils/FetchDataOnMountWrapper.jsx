import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useRouteMatch } from 'react-router-dom';

import { ErrorMessage, Footer, Header, Navigation } from '../components';

const FetchDataOnMountWrapper = props => {

	const { documentTitle, error, children } = props;

	const match = useRouteMatch();

	useEffect(() => {

		const { fetchData, dispatch } = props;

		if (fetchData) fetchData.map(fetchDataFunction => fetchDataFunction(dispatch, match));

	}, []);

	return (
		<React.Fragment>

			<Helmet
				defaultTitle='TheatreBase'
				titleTemplate='%s | TheatreBase'
				title={documentTitle()}
			/>

			<Header />

			<Navigation />

			<main className="main-content">

				{
					error.get('isExistent')
						? <ErrorMessage errorText={error.get('message')} />
						: children
				}

			</main>

			<Footer />

		</React.Fragment>
	);

};

FetchDataOnMountWrapper.propTypes = {
	documentTitle: PropTypes.func.isRequired,
	error: ImmutablePropTypes.map.isRequired,
	children: PropTypes.node.isRequired,
	fetchData: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	error: state.get('error')
});

export default connect(mapStateToProps)(FetchDataOnMountWrapper);
