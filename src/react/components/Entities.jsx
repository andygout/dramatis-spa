import PropTypes from 'prop-types';
import React from 'react';

import { AppendedMembers, InstanceLink } from '.';

const Entities = props => {

	const { entities } = props;

	return (
		<>

			{
				entities
					.map((entity, index) =>
						<React.Fragment key={index}>

							<InstanceLink instance={entity} />

							{
								entity.members?.length > 0 && (
									<AppendedMembers members={entity.members} />
								)
							}

						</React.Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
			}

		</>
	);

};

Entities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default Entities;
