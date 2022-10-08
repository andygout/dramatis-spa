import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

const AwardCeremonies = props => {

	const { awardCeremonies } = props;

	return (
		<ListWrapper
			instances={awardCeremonies}
			pageTitleText='Award ceremonies'
		>
		</ListWrapper>
	);

};

AwardCeremonies.propTypes = {
	awardCeremonies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	awardCeremonies: state.awardCeremonies
});

export default connect(mapStateToProps)(AwardCeremonies);
