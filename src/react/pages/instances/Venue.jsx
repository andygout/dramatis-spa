import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLink, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Venue extends React.Component {

	render () {

		const { venue } = this.props;

		const surVenue = venue.get('surVenue');
		const subVenues = venue.get('subVenues');
		const productions = venue.get('productions');

		let titleName = venue.get('name');

		if (surVenue) titleName = `${surVenue.get('name')}: ${titleName}`;

		return (
			<InstanceWrapper instance={venue} titleName={titleName}>

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
	venue: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	venue: state.get('venue')
});

export default connect(mapStateToProps)(Venue);
