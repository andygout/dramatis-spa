import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink, PrependedSurInstance } from '.';

const VenueLinkWithContext = props => {

	const { venue } = props;

	return (
		<React.Fragment>

			{
				venue.surVenue && (
					<PrependedSurInstance surInstance={venue.surVenue} />
				)
			}

			<InstanceLink instance={venue} />

		</React.Fragment>
	);

};

VenueLinkWithContext.propTypes = {
	venue: PropTypes.object.isRequired
};

export default VenueLinkWithContext;
