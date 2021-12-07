import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { AppendedVenue, InstanceLink } from '.';

const Productions = props => {

	const { productions } = props;

	return (
		<React.Fragment>

			{
				productions
					.map((production, index) =>
						<React.Fragment key={index}>

							<InstanceLink instance={production} />

							{
								production.get('venue') && (
									<AppendedVenue venue={production.get('venue')} />
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

Productions.propTypes = {
	productions: PropTypes.instanceOf(List).isRequired
};

export default Productions;
