import { Map } from 'immutable';
import React from 'react';

import { InstanceLink } from '.';

export default function (props) {

	const { instances } = props;

	return (
		<span className="role-text">
			{
				instances
					.map((instance, index) =>
						<span key={index}>
							{
								Map.isMap(instance) && instance.get('model') && instance.get('uuid')
									? <InstanceLink instance={instance} />
									: Map.isMap(instance)
										? instance.get('name')
										: instance
							}
						</span>
					)
					.reduce((prev, curr) => [prev, ' / ', curr])
			}
		</span>
	);

};
