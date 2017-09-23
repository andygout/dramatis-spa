import React from 'react';

import InstanceLink from './instance-link';

const JoinedArray = props => {

	const { instances } = props;

	return (
		<span className="role-text">
			{
				instances
					.map((instance, index) =>
						instance.model && instance.uuid ?
							<InstanceLink key={index} index={index} instance={instance} /> :
							<span key={index}>{instance.name || instance}</span>
					)
					.reduce((prev, curr) => [prev, ' / ', curr])
			}
		</span>
	);

};

export default JoinedArray;
