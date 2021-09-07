import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink } from '.';

const CommaSeparatedInstanceLinks = props => {

	const { instances } = props;

	return (
		<React.Fragment>

			{
				instances
					.map((instance, index) =>
						<React.Fragment key={index}>

							{
								instance.get('uuid')
									? <InstanceLink key={index} instance={instance} />
									: instance.get('name')
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

CommaSeparatedInstanceLinks.propTypes = {
	instances: PropTypes.instanceOf(List).isRequired
};

export default CommaSeparatedInstanceLinks;
