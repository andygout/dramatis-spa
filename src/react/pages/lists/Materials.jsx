import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { MaterialsList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Materials = props => {

	const { materials } = props;

	return (
		<ListPageWrapper pageTitleText='Materials'>

			<MaterialsList materials={materials} />

		</ListPageWrapper>
	);

};

Materials.propTypes = {
	materials: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	materials: state.materials
});

export default connect(mapStateToProps)(Materials);
