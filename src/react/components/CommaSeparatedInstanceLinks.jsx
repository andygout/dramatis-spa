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

							<InstanceLink key={index} instance={instance} />

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

CommaSeparatedInstanceLinks.propTypes = {
	instances: PropTypes.array.isRequired
};

export default CommaSeparatedInstanceLinks;
