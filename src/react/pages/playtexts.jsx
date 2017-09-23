import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '../components/list';
import PageTitle from '../components/page-title';

class Playtexts extends Component {

	render () {

		return (
			<div>

				<PageTitle pageTitle='Playtexts' />

				<List instances={this.props.playtexts} />

			</div>
		);

	};

};

Playtexts.propTypes = { playtexts: PropTypes.array.isRequired };

const mapStateToProps = ({ playtexts }) => ({ playtexts });

export default connect(mapStateToProps)(Playtexts);
