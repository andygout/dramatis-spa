import PropTypes from 'prop-types';
import { Fragment } from 'react';

import AppendedQualifier from './AppendedQualifier.jsx';
import InstanceLink from './InstanceLink.jsx';

const JoinedRoles = props => {

	const { instances } = props;

	return (
		<>

			{
				instances
					.map((instance, index) =>
						<Fragment key={index}>

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

						</Fragment>
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
