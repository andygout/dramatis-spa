import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '../components/list';
import PageTitle from '../components/page-title';

class People extends Component {

	render () {

		return (
			<div>

				<PageTitle pageTitle='People' />

				<List instances={this.props.people} />

			</div>
		);

	};

};

People.propTypes = { people: PropTypes.array.isRequired };

const mapStateToProps = ({ people }) => ({ people });

export default connect(mapStateToProps)(People);
