import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '../components/list';
import PageTitle from '../components/page-title';

class Characters extends Component {

	render () {

		return (
			<div>

				<PageTitle pageTitle='Characters' />

				<List instances={this.props.characters} />

			</div>
		);

	};

};

Characters.propTypes = { characters: PropTypes.array.isRequired };

const mapStateToProps = ({ characters }) => ({ characters });

export default connect(mapStateToProps)(Characters);
