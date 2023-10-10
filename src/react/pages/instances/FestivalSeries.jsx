import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstancePageWrapper } from '../../page-wrappers';

const FestivalSeries = props => {

	const { festivalSeries } = props;

	return (
		<InstancePageWrapper instance={festivalSeries} />
	);

};

FestivalSeries.propTypes = {
	festivalSeries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	festivalSeries: state.festivalSeries
});

export default connect(mapStateToProps)(FestivalSeries);
