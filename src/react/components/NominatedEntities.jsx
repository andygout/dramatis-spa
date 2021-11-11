import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { AppendedNominatedMembers, InstanceLink } from '.';

const NominatedEntities = props => {

	const { nominatedEntities } = props;

	return (
		<React.Fragment>

			{
				nominatedEntities
					.map((nominatedEntity, index) =>
						<React.Fragment key={index}>

							<InstanceLink instance={nominatedEntity} />

							{
								nominatedEntity.get('nominatedMembers')?.size > 0 && (
									<AppendedNominatedMembers nominatedMembers={nominatedEntity.get('nominatedMembers')} />
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

NominatedEntities.propTypes = {
	nominatedEntities: PropTypes.instanceOf(List).isRequired
};

export default NominatedEntities;
