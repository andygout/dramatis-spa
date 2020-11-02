import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink } from '.';

const CommaSeparatedInstanceLinks = props => {

	const { instances } = props;

	return (
		<React.Fragment>

			{
				instances
					.map((instance, index) =>
						<InstanceLink key={index} instance={instance} />
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

CommaSeparatedInstanceLinks.propTypes = {
	instances: ImmutablePropTypes.list.isRequired
};

export default CommaSeparatedInstanceLinks;
