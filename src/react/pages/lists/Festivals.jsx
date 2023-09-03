import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components';
import { ListPageWrapper } from '../../page-wrappers';

const Festivals = props => {

	const { festivals } = props;

	return (
		<ListPageWrapper pageTitleText='Festivals'>

			<InstanceLinksList instances={festivals} />

		</ListPageWrapper>
	);

};

Festivals.propTypes = {
	festivals: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	festivals: state.festivals
});

export default connect(mapStateToProps)(Festivals);
