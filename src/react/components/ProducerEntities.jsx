import PropTypes from 'prop-types';
import { Fragment } from 'react';

import CommaSeparatedInstanceLinks from './CommaSeparatedInstanceLinks.jsx';
import InstanceLink from './InstanceLink.jsx';

const ProducerEntities = props => {

	const { entities } = props;

	return (
		<>

			{
				entities
					.map((entity, index) =>
						<Fragment key={index}>

							{
								entity.members?.length > 0 && (
									<>

										<CommaSeparatedInstanceLinks instances={entity.members} />

										<>{' for '}</>

									</>
								)
							}

							<InstanceLink instance={entity} />

						</Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
			}

		</>
	);

};

ProducerEntities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default ProducerEntities;
