import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink, PrependedCreditedMembers } from '.';

const ProducerEntities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			{
				entities
					.map((entity, index) =>
						<React.Fragment key={index}>

							{
								entity.get('creditedMembers')?.size > 0 && (
									<PrependedCreditedMembers creditedMembers={entity.get('creditedMembers')} />
								)
							}

							{
								entity.get('uuid')
									? <InstanceLink instance={entity} />
									: entity.get('name')
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

ProducerEntities.propTypes = {
	entities: PropTypes.instanceOf(List).isRequired
};

export default ProducerEntities;
