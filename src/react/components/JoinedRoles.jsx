import PropTypes from 'prop-types';
import React from 'react';

import { AppendedQualifier, InstanceLink } from './index.js';

const JoinedRoles = props => {

	const { instances } = props;

	return (
		<>

			{
				instances
					.map((instance, index) =>
						<React.Fragment key={index}>

							<span className="fictional-name-text">

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

							</span>

							{
								instance.isAlternate && (
									<>{' [alt]'}</>
								)
							}

						</React.Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ' / ', currentValue])
			}

		</>
	);

};

JoinedRoles.propTypes = {
	instances: PropTypes.array.isRequired
};

export default JoinedRoles;
