import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink } from '.';

const AppendedSubVenues = props => {

	const { subVenues } = props;

	return (
		<React.Fragment>

			<React.Fragment>:&nbsp;</React.Fragment>

			{
				subVenues
					.map((subVenue, index) =>
						<InstanceLink key={index} instance={subVenue} />
					)
					.reduce((prev, curr) => [prev, ' / ', curr])
			}

		</React.Fragment>
	);

};

AppendedSubVenues.propTypes = {
	subVenues: ImmutablePropTypes.list.isRequired
};

export default AppendedSubVenues;
