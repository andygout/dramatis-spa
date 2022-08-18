import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class Venues extends React.Component {

	render () {

		const { venues } = this.props;

		return (
			<ListWrapper
				instances={venues}
				pageTitleText='Venues'
			>
			</ListWrapper>
		);

	}

}

Venues.propTypes = {
	venues: ImmutablePropTypes.list.isRequired
};

const mapStateToProps = state => ({
	venues: state.get('venues')
});

export default connect(mapStateToProps)(Venues);
