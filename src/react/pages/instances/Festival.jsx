import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstancePageWrapper } from '../../page-wrappers';

const Festival = props => {

	const { festival } = props;

	return (
		<InstancePageWrapper instance={festival} />
	);

};

Festival.propTypes = {
	festival: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	festival: state.festival
});

export default connect(mapStateToProps)(Festival);
