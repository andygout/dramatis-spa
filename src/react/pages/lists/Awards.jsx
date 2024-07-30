import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Awards = props => {

	const { awards } = props;

	return (
		<ListPageWrapper pageTitleText='Awards'>

			<InstanceLinksList instances={awards} />

		</ListPageWrapper>
	);

};

Awards.propTypes = {
	awards: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	awards: state.awards
});

export default connect(mapStateToProps)(Awards);
