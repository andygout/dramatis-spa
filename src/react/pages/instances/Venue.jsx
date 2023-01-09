import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLink, InstanceLinksList, ProductionsList } from '../../components';
import { InstancePageWrapper } from '../../page-wrappers';

const Venue = props => {

	const { venue } = props;

	const { surVenue, subVenues, productions } = venue;

	return (
		<InstancePageWrapper instance={venue}>

			{
				surVenue && (
					<InstanceFacet labelText='Part of'>

						<InstanceLink instance={surVenue} />

					</InstanceFacet>
				)
			}

			{
				subVenues?.length > 0 && (
					<InstanceFacet labelText='Comprises'>

						<InstanceLinksList instances={subVenues} />

					</InstanceFacet>
				)
			}

			{
				productions?.length > 0 && (
					<InstanceFacet labelText='Productions'>

						<ProductionsList productions={productions} />

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

Venue.propTypes = {
	venue: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	venue: state.venue
});

export default connect(mapStateToProps)(Venue);
