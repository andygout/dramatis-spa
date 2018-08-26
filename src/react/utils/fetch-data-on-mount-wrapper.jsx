import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import ErrorMessage from '../components/error-message';
import Footer from '../components/footer';
import Header from '../components/header';
import Nav from '../components/nav';

class FetchDataOnMountWrapper extends React.Component {

	componentDidMount () {

		const { fetchData, dispatch, match, location } = this.props;

		if (fetchData) fetchData.map(fn => fn(dispatch, match, location));

	};

	shouldComponentUpdate (nextProps) {

		return this.props.error.exists !== nextProps.error.exists;

	}

	render () {

		const { props } = this;

		const { error } = props;

		return (
			<div className="page-container">

				<Helmet
					defaultTitle='TheatreBase'
					titleTemplate='%s | TheatreBase'
					title={props.documentTitle()}
				/>

				<Header/>

				<Nav/>

				<main className="main-content">

					{
						error && error.exists
							? <ErrorMessage errorText={error.message}/>
							: props.children
					}

				</main>

				<Footer/>

			</div>
		);

	};

};

FetchDataOnMountWrapper.propTypes = { error: PropTypes.object.isRequired };

const mapStateToProps = error => (error);

export default connect(mapStateToProps)(FetchDataOnMountWrapper);
