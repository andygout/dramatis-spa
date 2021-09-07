import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class Materials extends React.Component {

	render () {

		const { materials } = this.props;

		return (
			<ListWrapper
				instances={materials}
				pageTitleText='Materials'
			>
			</ListWrapper>
		);

	}

}

Materials.propTypes = {
	materials: PropTypes.instanceOf(List).isRequired
};

const mapStateToProps = state => ({
	materials: state.get('materials')
});

export default connect(mapStateToProps)(Materials);
