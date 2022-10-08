import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

const Companies = props => {

	const { companies } = props;

	return (
		<ListWrapper
			instances={companies}
			pageTitleText='Companies'
		>
		</ListWrapper>
	);

};

Companies.propTypes = {
	companies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	companies: state.companies
});

export default connect(mapStateToProps)(Companies);
