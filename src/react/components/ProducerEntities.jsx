import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink, PrependedMembers } from '.';

const ProducerEntities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			{
				entities
					.map((entity, index) =>
						<React.Fragment key={index}>

							{
								entity.members?.length > 0 && (
									<PrependedMembers members={entity.members} />
								)
							}

							{
								entity.uuid
									? <InstanceLink instance={entity} />
									: entity.name
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

ProducerEntities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default ProducerEntities;
