import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ListWrapper from '../../utils/list-wrapper';

class Playtexts extends React.Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.playtexts}
				pageTitleText='Playtexts'
			>
			</ListWrapper>
		);

	};

};

Playtexts.propTypes = { playtexts: PropTypes.array.isRequired };

const mapStateToProps = ({ playtexts }) => ({ playtexts });

export default connect(mapStateToProps)(Playtexts);
