import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components';
import { ListPageWrapper } from '../../page-wrappers';

const Seasons = props => {

	const { seasons } = props;

	return (
		<ListPageWrapper pageTitleText='Seasons'>

			<InstanceLinksList instances={seasons} />

		</ListPageWrapper>
	);

};

Seasons.propTypes = {
	seasons: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	seasons: state.seasons
});

export default connect(mapStateToProps)(Seasons);
