import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
	productions: ImmutablePropTypes.list.isRequired
};

export default Productions;
