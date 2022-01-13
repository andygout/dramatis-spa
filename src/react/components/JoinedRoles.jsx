import { List, Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

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
									<React.Fragment>{` (${instance.get('qualifier')})`}</React.Fragment>
								)
							}

							{
								Map.isMap(instance) && instance.get('isAlternate') && (
									<React.Fragment>{' (alt)'}</React.Fragment>
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
	instances: PropTypes.instanceOf(List).isRequired
};

export default JoinedRoles;
