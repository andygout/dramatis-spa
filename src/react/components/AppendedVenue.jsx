import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink } from '.';

const AppendedVenue = props => {

	const { venue } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' - '}</React.Fragment>

			{
				venue.surVenue && (
					<React.Fragment><InstanceLink instance={venue.surVenue} />{': '}</React.Fragment>
				)
			}

			<InstanceLink instance={venue} />

		</React.Fragment>
	);

};

AppendedVenue.propTypes = {
	venue: PropTypes.object.isRequired
};

export default AppendedVenue;
