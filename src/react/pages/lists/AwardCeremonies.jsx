import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class AwardCeremonies extends React.Component {

	render () {

		const { awardCeremonies } = this.props;

		return (
			<ListWrapper
				instances={awardCeremonies}
				pageTitleText='Award ceremonies'
			>
			</ListWrapper>
		);

	}

}

AwardCeremonies.propTypes = {
	awardCeremonies: PropTypes.instanceOf(List).isRequired
};

const mapStateToProps = state => ({
	awardCeremonies: state.get('awardCeremonies')
});

export default connect(mapStateToProps)(AwardCeremonies);
