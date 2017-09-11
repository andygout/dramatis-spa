import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '../components/list';
import PageTitle from '../components/page-title';

class Theatres extends Component {

	render () {

		return (
			<div>

				<PageTitle pageTitle='Theatres' />

				<List instances={this.props.theatres} />

			</div>
		);

	};

};

Theatres.propTypes = { theatres: PropTypes.array.isRequired };

const mapStateToProps = ({ theatres }) => ({ theatres });

export default connect(mapStateToProps)(Theatres);
