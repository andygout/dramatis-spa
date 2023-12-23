import PropTypes from 'prop-types';
import React from 'react';

import { VenueLinkWithContext } from '.';

const AppendedVenue = props => {

	const { venue } = props;

	return (
		<>

			<>{' — '}</>

			<VenueLinkWithContext venue={venue} />

		</>
	);

};

AppendedVenue.propTypes = {
	venue: PropTypes.object.isRequired
};

export default AppendedVenue;
