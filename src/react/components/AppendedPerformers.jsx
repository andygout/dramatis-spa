import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink, AppendedPerformerOtherRoles } from '.';

const AppendedPerformers = props => {

	const { performers } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;- performed by:&nbsp;</React.Fragment>

			{
				performers
					.map((performer, index) =>
						<React.Fragment key={index}>

							<React.Fragment>

								<InstanceLink instance={performer} />

								<React.Fragment>&nbsp;…&nbsp;</React.Fragment>

								<span className="role-text">
									{
										performer.get('roleName')
									}
									{
										performer.get('qualifier') && (
											<React.Fragment>&nbsp;({ performer.get('qualifier') })</React.Fragment>
										)
									}
								</span>

							</React.Fragment>

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
