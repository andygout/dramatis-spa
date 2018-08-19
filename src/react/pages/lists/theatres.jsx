import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ListWrapper from '../../utils/list-wrapper';

class Theatres extends Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.theatres}
				pageTitleText='Theatres'
			>
			</ListWrapper>
		);

	};

};

Theatres.propTypes = { theatres: PropTypes.array.isRequired };

const mapStateToProps = ({ theatres }) => ({ theatres });

export default connect(mapStateToProps)(Theatres);
