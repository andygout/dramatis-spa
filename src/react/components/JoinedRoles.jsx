import PropTypes from 'prop-types';
import React from 'react';

import { AppendedQualifier, InstanceLink } from '.';

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
									<AppendedQualifier qualifier={instance.qualifier} />
								)
							}

							{
								instance.isAlternate && (
									<>{' (alt)'}</>
								)
							}

						</React.Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ' / ', currentValue])
			}

		</span>
	);

};

JoinedRoles.propTypes = {
	instances: PropTypes.array.isRequired
};

export default JoinedRoles;
