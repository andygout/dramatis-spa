import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../wrappers';

const Venues = props => {

	const { venues } = props;

	return (
		<ListWrapper
			instances={venues}
			pageTitleText='Venues'
		>
		</ListWrapper>
	);

};

Venues.propTypes = {
	venues: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	venues: state.venues
});

export default connect(mapStateToProps)(Venues);
