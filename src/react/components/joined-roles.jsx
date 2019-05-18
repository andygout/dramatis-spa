import { Map } from 'immutable';
import React from 'react';

import InstanceLink from './instance-link';

const JoinedArray = props => {

	const { instances } = props;

	return (
		<span className="role-text">
			{
				instances
					.map((instance, index) =>
						Map.isMap(instance) && instance.get('model') && instance.get('uuid')
							? <InstanceLink key={index} index={index} instance={instance}/>
							: <span key={index}>{Map.isMap(instance) ? instance.get('name') : instance}</span>
					)
					.reduce((prev, curr) => [prev, ' / ', curr])
			}
		</span>
	);

};

export default JoinedArray;
