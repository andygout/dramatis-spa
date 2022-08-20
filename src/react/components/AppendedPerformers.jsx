import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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

							<span className="role-text">

								{
									performer.get('roleName')
								}

								{
									performer.get('qualifier') && (
										<React.Fragment>{` (${performer.get('qualifier')})`}</React.Fragment>
									)
								}

								{
									performer.get('isAlternate') && (
										<React.Fragment>{' (alt)'}</React.Fragment>
									)
								}

							</span>

							{
								performer.get('otherRoles').size > 0 && (
									<AppendedPerformerOtherRoles otherRoles={performer.get('otherRoles')} />
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
	performers: ImmutablePropTypes.list.isRequired
};

export default AppendedPerformers;
