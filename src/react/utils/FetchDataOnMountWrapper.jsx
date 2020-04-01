import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';

class FetchDataOnMountWrapper extends React.Component {

	componentDidMount () {

		const { fetchData, dispatch, match, location } = this.props;

		if (fetchData) fetchData.map(fn => fn(dispatch, match, location));

	};

	componentWillReceiveProps (nextProps) {

		const fetchReqd =
			(this.props.match.path === nextProps.match.path) &&
			(this.props.match.url !== nextProps.match.url);

		if (fetchReqd) {

			const { fetchData, dispatch, match, location } = nextProps;

			fetchData.map(fn => fn(dispatch, match, location));

		}

	}

	shouldComponentUpdate (nextProps) {

		return this.props.error.get('exists') !== nextProps.error.get('exists');

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
						error.get('exists')
							? <ErrorMessage errorText={error.get('message')}/>
							: props.children
					}

				</main>

				<Footer/>

			</div>
		);

	};

};

FetchDataOnMountWrapper.propTypes = { error: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ error: state.get('error') });

export default connect(mapStateToProps)(FetchDataOnMountWrapper);
