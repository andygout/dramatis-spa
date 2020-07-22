import { Map } from 'immutable';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink } from '.';

const JoinedRoles = props => {

	const { instances } = props;

	return (
		<span className="role-text">
			{
				instances
					.map((instance, index) =>
						<span key={index}>
							{
								Map.isMap(instance) && instance.get('uuid')
									? <InstanceLink instance={instance} />
									: Map.isMap(instance)
										? instance.get('name')
										: instance
							}
						</span>
					)
					.reduce((prev, curr) => [prev, ' / ', curr])
			}
		</span>
	);

};

JoinedRoles.propTypes = {
	instances: ImmutablePropTypes.list.isRequired
};

export default JoinedRoles;
