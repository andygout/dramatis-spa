import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import ErrorMessage from '../components/error-message';
import Footer from '../components/footer';
import Header from '../components/header';
import Nav from '../components/nav';
import PageTitle from '../components/page-title';

const fetchDataOnMount = Component => {

	class FetchDataOnMount extends Component {

		componentDidMount () {

			const { fetchData, dispatch, match, location } = this.props;

			if (fetchData) fetchData.map(fn => fn(dispatch, match, location));

		};

		render () {

			const { props } = this;

			const error = this.store && this.store.getState().error;

			return (
				<div className="page-container">

					<Helmet
						defaultTitle='TheatreBase'
						titleTemplate='%s | TheatreBase'
						title={props.documentTitle()}
					/>

					<Header />

					<Nav />

					<main className="main-content">

						{
							error ?
								<ErrorMessage errorText='Error' /> :
								<Component {...props} />
						}

					</main>

					<Footer />

				</div>
			);

		};

	};

	FetchDataOnMount.propTypes = { error: PropTypes.bool.isRequired };

	const mapStateToProps = ({ error }) => ({ error });

	return connect(mapStateToProps)(FetchDataOnMount);

};

export default fetchDataOnMount;
