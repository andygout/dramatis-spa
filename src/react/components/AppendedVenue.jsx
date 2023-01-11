import PropTypes from 'prop-types';
import React from 'react';

import { VenueLinkWithContext } from '.';

const AppendedVenue = props => {

	const { venue } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' - '}</React.Fragment>

			<VenueLinkWithContext venue={venue} />

		</React.Fragment>
	);

};

AppendedVenue.propTypes = {
	venue: PropTypes.object.isRequired
};

export default AppendedVenue;
