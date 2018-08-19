import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ListWrapper from '../../utils/list-wrapper';

class Characters extends Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.characters}
				pageTitleText='Characters'
			>
			</ListWrapper>
		);

	};

};

Characters.propTypes = { characters: PropTypes.array.isRequired };

const mapStateToProps = ({ characters }) => ({ characters });

export default connect(mapStateToProps)(Characters);
