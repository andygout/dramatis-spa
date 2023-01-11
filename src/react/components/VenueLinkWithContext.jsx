import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink, PrependedSurInstance } from '.';

const VenueLinkWithContext = props => {

	const { venue } = props;

	return (
		<>

			{
				venue.surVenue && (
					<PrependedSurInstance surInstance={venue.surVenue} />
				)
			}

			<InstanceLink instance={venue} />

		</>
	);

};

VenueLinkWithContext.propTypes = {
	venue: PropTypes.object.isRequired
};

export default VenueLinkWithContext;
