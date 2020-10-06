import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import {
	AppendedDisplayName,
	AppendedGroups,
	AppendedPerformers,
	AppendedRoles,
	AppendedQualifiers,
	AppendedTheatre,
	InstanceLink
} from '.';

const List = props => {

	const { instances } = props;

	return (
		<ul className="list">
			{
				instances.map((instance, index) => (
					<li key={index}>

						{
							instance.get('uuid')
								? <InstanceLink instance={instance} />
								: <span>{ instance.get('name') }</span>
						}

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
							instance.get('characterDisplayName') && (
								<AppendedDisplayName displayName={instance.get('characterDisplayName')} />
							)
						}

						{
							instance.get('qualifiers')?.size > 0 && (
								<AppendedQualifiers qualifiers={instance.get('qualifiers')} />
							)
						}

						{
							instance.get('groups')?.size > 0 && (
								<AppendedGroups groups={instance.get('groups')} />
							)
						}

						{
							instance.get('performers')?.size > 0 && (
								<AppendedPerformers performers={instance.get('performers')} />
							)
						}

						{
							instance.get('qualifier') && (
								<span> ({instance.get('qualifier')})</span>
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
