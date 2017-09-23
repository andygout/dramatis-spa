import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '../components/list';
import PageTitle from '../components/page-title';

class Productions extends Component {

	render () {

		return (
			<div>

				<PageTitle pageTitle='Productions' />

				<List instances={this.props.productions} />

			</div>
		);

	};

};

Productions.propTypes = { productions: PropTypes.array.isRequired };

const mapStateToProps = ({ productions }) => ({ productions });

export default connect(mapStateToProps)(Productions);
