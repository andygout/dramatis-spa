import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppendedMembers, InstanceLink } from '.';

const Entities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			{
				entities
					.map((entity, index) =>
						<React.Fragment key={index}>

							<InstanceLink instance={entity} />

							{
								entity.get('members')?.size > 0 && (
									<AppendedMembers members={entity.get('members')} />
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

Entities.propTypes = {
	entities: ImmutablePropTypes.list.isRequired
};

export default Entities;
