import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLink, List } from '../../components';
import { InstanceWrapper } from '../../wrappers';

const Venue = props => {

	const { venue } = props;

	const {
		surVenue,
		subVenues,
		productions
	} = venue;

	return (
		<InstanceWrapper instance={venue}>

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

						<List instances={subVenues} />

					</InstanceFacet>
				)
			}

			{
				productions?.length > 0 && (
					<InstanceFacet labelText='Productions'>

						<List instances={productions} />

					</InstanceFacet>
				)
			}

		</InstanceWrapper>
	);

};

Venue.propTypes = {
	venue: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	venue: state.venue
});

export default connect(mapStateToProps)(Venue);
