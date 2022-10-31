import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink, AppendedPerformerOtherRoles } from '.';

const AppendedPerformers = props => {

	const { performers } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' - performed by: '}</React.Fragment>

			{
				performers
					.map((performer, index) =>
						<React.Fragment key={index}>

							<InstanceLink instance={performer} />

							<React.Fragment>{' … '}</React.Fragment>

							<span className="fictional-name-text">

								{
									performer.roleName
								}

								{
									performer.qualifier && (
										<React.Fragment>{` (${performer.qualifier})`}</React.Fragment>
									)
								}

								{
									performer.isAlternate && (
										<React.Fragment>{' (alt)'}</React.Fragment>
									)
								}

							</span>

							{
								performer.otherRoles.length > 0 && (
									<AppendedPerformerOtherRoles otherRoles={performer.otherRoles} />
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ' / ', curr])
			}

		</React.Fragment>
	);

};

AppendedPerformers.propTypes = {
	performers: PropTypes.array.isRequired
};

export default AppendedPerformers;
