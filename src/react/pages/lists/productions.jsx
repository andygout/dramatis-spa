import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ListWrapper from '../../utils/list-wrapper';

class Productions extends React.Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.productions}
				pageTitleText='Productions'
			>
			</ListWrapper>
		);

	};

};

Productions.propTypes = { productions: PropTypes.array.isRequired };

const mapStateToProps = ({ productions }) => ({ productions });

export default connect(mapStateToProps)(Productions);
