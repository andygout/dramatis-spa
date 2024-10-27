import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { InstanceLink } from './index.js';

const CommaSeparatedInstanceLinks = props => {

	const { instances } = props;

	return (
		<>

			{
				instances
					.map((instance, index) =>
						<Fragment key={index}>

							<InstanceLink key={index} instance={instance} />

						</Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
			}

		</>
	);

};

CommaSeparatedInstanceLinks.propTypes = {
	instances: PropTypes.array.isRequired
};

export default CommaSeparatedInstanceLinks;
