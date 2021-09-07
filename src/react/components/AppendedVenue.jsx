import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink } from '.';

const AppendedVenue = props => {

	const { venue } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;-&nbsp;</React.Fragment>

			{
				venue.get('surVenue') && (
					<React.Fragment><InstanceLink instance={venue.get('surVenue')} />:&nbsp;</React.Fragment>
				)
			}

			<InstanceLink instance={venue} />

		</React.Fragment>
	);

};

AppendedVenue.propTypes = {
	venue: PropTypes.instanceOf(Map).isRequired
};

export default AppendedVenue;
