import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceWrapper } from '../../utils';

class Award extends React.Component {

	render () {

		const { award } = this.props;

		return (
			<InstanceWrapper instance={award} />
		);

	}

}

Award.propTypes = {
	award: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	award: state.get('award')
});

export default connect(mapStateToProps)(Award);
