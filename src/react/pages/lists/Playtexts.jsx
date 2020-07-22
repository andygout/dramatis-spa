import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class Playtexts extends React.Component {

	render () {

		const { playtexts } = this.props;

		return (
			<ListWrapper
				instances={playtexts}
				pageTitleText='Playtexts'
			>
			</ListWrapper>
		);

	}

}

Playtexts.propTypes = {
	playtexts: ImmutablePropTypes.list.isRequired
};

const mapStateToProps = state => ({
	playtexts: state.get('playtexts')
});

export default connect(mapStateToProps)(Playtexts);
