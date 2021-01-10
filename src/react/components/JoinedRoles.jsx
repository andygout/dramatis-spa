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
						<React.Fragment key={index}>

							{
								Map.isMap(instance) && instance.get('uuid')
									? <InstanceLink instance={instance} />
									: Map.isMap(instance)
										? instance.get('name')
										: instance
							}

							{
								Map.isMap(instance) && instance.get('qualifier') && (
									<React.Fragment>&nbsp;({ instance.get('qualifier') })</React.Fragment>
								)
							}

						</React.Fragment>
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
