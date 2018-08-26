import React from 'react';

import InstanceLink from './instance-link';
import JoinedRoles from './joined-roles';
import List from './list';

const RelatedInstance = props => {

	const { labelText, instance, join } = props;

	return (
		<div className="content-wrapper">

			<div className="content-label">
				{labelText}
			</div>

			<div className="content">
				{
					Array.isArray(instance) ?
						join ?
							<JoinedRoles instances={instance} /> :
							<List instances={instance} />
						: <InstanceLink instance={instance} />
				}
			</div>

		</div>
	);

};

export default RelatedInstance;
