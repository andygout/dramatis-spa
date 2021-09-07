import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

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
	subVenues: PropTypes.instanceOf(List).isRequired
};

export default AppendedSubVenues;
