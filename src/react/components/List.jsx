import React from 'react';

import { AppendedPerformers, AppendedRoles, AppendedTheatre, InstanceLink } from '.';

export default props => {

	const { instances } = props;

	return (
		<ul className="list">
			{
				instances.map((instance, index) => (
					<li key={index}>

						<InstanceLink instance={instance} />

						{
							instance.get('theatre') && (
								<AppendedTheatre theatre={instance.get('theatre')} />
							)
						}

						{
							instance.get('roles') && instance.get('roles').size > 0 && (
								<AppendedRoles roles={instance.get('roles')} />
							)
						}

						{
							instance.get('performers') && instance.get('performers').size > 0 && (
								<AppendedPerformers performers={instance.get('performers')} />
							)
						}

					</li>
				))
			}
		</ul>
	);

};
