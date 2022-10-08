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
								production.venue && (
									<AppendedVenue venue={production.venue} />
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
	productions: PropTypes.array.isRequired
};

export default Productions;
