import PropTypes from 'prop-types';
import React from 'react';

import isObjectWithKeys from '../../lib/is-object-with-keys';
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
								isObjectWithKeys(instance) && instance.uuid
									? <InstanceLink instance={instance} />
									: isObjectWithKeys(instance)
										? instance.name
										: instance
							}

							{
								isObjectWithKeys(instance) && instance.qualifier && (
									<React.Fragment>{` (${instance.qualifier})`}</React.Fragment>
								)
							}

							{
								isObjectWithKeys(instance) && instance.isAlternate && (
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
	instances: PropTypes.array.isRequired
};

export default JoinedRoles;
