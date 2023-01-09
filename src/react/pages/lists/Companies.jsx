import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components';
import { ListPageWrapper } from '../../page-wrappers';

const Companies = props => {

	const { companies } = props;

	return (
		<ListPageWrapper pageTitleText='Companies'>

			<InstanceLinksList instances={companies} />

		</ListPageWrapper>
	);

};

Companies.propTypes = {
	companies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	companies: state.companies
});

export default connect(mapStateToProps)(Companies);
