import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../wrappers';

const Materials = props => {

	const { materials } = props;

	return (
		<ListWrapper
			instances={materials}
			pageTitleText='Materials'
		>
		</ListWrapper>
	);

};

Materials.propTypes = {
	materials: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	materials: state.materials
});

export default connect(mapStateToProps)(Materials);
