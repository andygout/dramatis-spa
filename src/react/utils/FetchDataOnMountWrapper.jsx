import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ErrorMessage, Footer, Header, Navigation } from '../components';

class FetchDataOnMountWrapper extends React.Component {

	componentDidMount () {

		const { fetchData, dispatch, match } = this.props;

		if (fetchData) fetchData.map(fetchDataFunction => fetchDataFunction(dispatch, match));

	}

	render () {

		const { documentTitle, error, children } = this.props;

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

	}

}

FetchDataOnMountWrapper.propTypes = {
	documentTitle: PropTypes.func.isRequired,
	error: PropTypes.instanceOf(Map).isRequired,
	children: PropTypes.node.isRequired,
	fetchData: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	error: state.get('error')
});

export default connect(mapStateToProps)(FetchDataOnMountWrapper);
