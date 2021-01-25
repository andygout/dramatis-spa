import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceWrapper } from '../../utils';

class Company extends React.Component {

	render () {

		const { company } = this.props;

		return (
			<InstanceWrapper instance={company} />
		);

	}

}

Company.propTypes = {
	company: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	company: state.get('company')
});

export default connect(mapStateToProps)(Company);
