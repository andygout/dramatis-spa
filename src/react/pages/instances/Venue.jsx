import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLink, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Venue extends React.Component {

	render () {

		const { venue } = this.props;

		const surVenue = venue.get('surVenue');
		const subVenues = venue.get('subVenues');
		const productions = venue.get('productions');

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
					subVenues?.size > 0 && (
						<InstanceFacet labelText='Comprises'>

							<List instances={subVenues} />

						</InstanceFacet>
					)
				}

				{
					productions?.size > 0 && (
						<InstanceFacet labelText='Productions'>

							<List instances={productions} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Venue.propTypes = {
	venue: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	venue: state.get('venue')
});

export default connect(mapStateToProps)(Venue);
