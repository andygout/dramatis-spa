import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink } from '.';

const AppendedVenue = props => {

	const { venue } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' - '}</React.Fragment>

			{
				venue.get('surVenue') && (
					<React.Fragment><InstanceLink instance={venue.get('surVenue')} />{': '}</React.Fragment>
				)
			}

			<InstanceLink instance={venue} />

		</React.Fragment>
	);

};

AppendedVenue.propTypes = {
	venue: ImmutablePropTypes.map.isRequired
};

export default AppendedVenue;
