import PropTypes from 'prop-types';
import React from 'react';

import { CommaSeparatedInstanceLinks, InstanceLink } from './index.js';

const ProducerEntities = props => {

	const { entities } = props;

	return (
		<>

			{
				entities
					.map((entity, index) =>
						<React.Fragment key={index}>

							{
								entity.members?.length > 0 && (
									<>

										<CommaSeparatedInstanceLinks instances={entity.members} />

										<>{' for '}</>

									</>
								)
							}

							<InstanceLink instance={entity} />

						</React.Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
			}

		</>
	);

};

ProducerEntities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default ProducerEntities;
