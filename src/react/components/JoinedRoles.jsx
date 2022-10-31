import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink } from '.';

const JoinedRoles = props => {

	const { instances } = props;

	return (
		<span className="fictional-name-text">

			{
				instances
					.map((instance, index) =>
						<React.Fragment key={index}>

							{
								instance.uuid
									? <InstanceLink instance={instance} />
									: instance.name
							}

							{
								instance.qualifier && (
									<React.Fragment>{` (${instance.qualifier})`}</React.Fragment>
								)
							}

							{
								instance.isAlternate && (
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
