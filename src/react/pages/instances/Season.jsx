import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstancePageWrapper } from '../../page-wrappers';

const Season = props => {

	const { season } = props;

	return (
		<InstancePageWrapper instance={season} />
	);

};

Season.propTypes = {
	season: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	season: state.season
});

export default connect(mapStateToProps)(Season);
