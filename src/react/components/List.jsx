import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import {
	AppendedDepictions,
	AppendedPerformers,
	AppendedRoles,
	AppendedSubTheatres,
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
							instance.get('subTheatre') && (
								<AppendedTheatre theatre={instance.get('subTheatre')} />
							)
						}

						{
							instance.get('subTheatres')?.size > 0 && (
								<AppendedSubTheatres subTheatres={instance.get('subTheatres')} />
							)
						}

						{
							instance.get('roles')?.size > 0 && (
								<AppendedRoles roles={instance.get('roles')} />
							)
						}

						{
							instance.get('depictions') && (
								<AppendedDepictions depictions={instance.get('depictions')} />
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
