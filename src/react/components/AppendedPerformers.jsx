import React from 'react';

import { InstanceLink, AppendedPerformerOtherRoles } from '.';

export default function (props) {

	const { performers } = props;

	return (
		<React.Fragment>

			<span>&nbsp;- performed by:&nbsp;</span>

			{
				performers
					.map((performer, index) =>
						<React.Fragment key={index}>

							<React.Fragment>

								<InstanceLink instance={performer} />

								<span>&nbsp;…&nbsp;</span>

								<span className="role-text">{performer.get('roleName')}</span>

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
