import PropTypes from 'prop-types';
import { Fragment } from 'react';

import InstanceLink from './InstanceLink.jsx';
import JoinedRoles from './JoinedRoles.jsx';

const AppendedPerformers = props => {

	const { performers } = props;

	return (
		<>

			<>{' — performed by: '}</>

			{
				performers
					.map((performer, index) =>
						<Fragment key={index}>

							<InstanceLink instance={performer} />

							<>{' … '}</>

							<span className="fictional-name-text">

								{
									performer.roleName
								}

								{
									performer.qualifier && (
										<>{` (${performer.qualifier})`}</>
									)
								}

							</span>

							{
								performer.isAlternate && (
									<>{' [alt]'}</>
								)
							}

							{
								performer.otherRoles.length > 0 && (
									<>

										<>{'; also performed: '}</>

										<JoinedRoles instances={performer.otherRoles} />

									</>
								)
							}

						</Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ' / ', currentValue])
			}

		</>
	);

};

AppendedPerformers.propTypes = {
	performers: PropTypes.array.isRequired
};

export default AppendedPerformers;
