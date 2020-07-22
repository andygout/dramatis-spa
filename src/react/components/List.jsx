import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppendedPerformers, AppendedRoles, AppendedTheatre, InstanceLink } from '.';

const List = props => {

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
							instance.get('roles')?.size > 0 && (
								<AppendedRoles roles={instance.get('roles')} />
							)
						}

						{
							instance.get('performers')?.size > 0 && (
								<AppendedPerformers performers={instance.get('performers')} />
							)
						}

					</li>
				))
			}
		</ul>
	);

};

List.propTypes = {
	instances: ImmutablePropTypes.list.isRequired
};

export default List;
