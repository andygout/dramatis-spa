import { Fragment } from 'react';

import InstanceLink from './InstanceLink.jsx';

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

export default CommaSeparatedInstanceLinks;
