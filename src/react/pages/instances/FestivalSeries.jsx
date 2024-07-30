import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLinksList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const FestivalSeries = props => {

	const { festivalSeries } = props;

	const { festivals } = festivalSeries;

	return (
		<InstancePageWrapper instance={festivalSeries}>

			{
				festivals?.length > 0 && (
					<InstanceFacet labelText='Comprises'>

						<InstanceLinksList instances={festivals} />

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

FestivalSeries.propTypes = {
	festivalSeries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	festivalSeries: state.festivalSeries
});

export default connect(mapStateToProps)(FestivalSeries);
