import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ErrorMessage, Footer, Header, Nav } from '../components';

class FetchDataOnMountWrapper extends React.Component {

	constructor (props) {

		super(props);

		const { match: { path, url } } = props;

		this.state = {
			match: {
				path,
				url
			}
		};

	}

	componentDidMount () {

		const { fetchData, dispatch, match, location } = this.props;

		if (fetchData) fetchData.map(fetchDataFunction => fetchDataFunction(dispatch, match, location));

	};

	static getDerivedStateFromProps (props, state) {

		const fetchRequired =
			(state.match.path === props.match.path) &&
			(state.match.url !== props.match.url);

		if (fetchRequired) {

			const { fetchData, dispatch, match: { path, url }, location } = props;

			fetchData.map(fetchDataFunction => fetchDataFunction(dispatch, match, location));

			return {
				match: {
					path,
					url
				}
			};

		}

		return null;

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
