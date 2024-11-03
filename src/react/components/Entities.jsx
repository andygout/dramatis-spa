import PropTypes from 'prop-types';
import { Fragment } from 'react';

import AppendedMembers from './AppendedMembers.jsx';
import InstanceLink from './InstanceLink.jsx';

const Entities = props => {

	const { entities } = props;

	return (
		<>

			{
				entities
					.map((entity, index) =>
						<Fragment key={index}>

							<InstanceLink instance={entity} />

							{
								entity.members?.length > 0 && (
									<AppendedMembers members={entity.members} />
								)
							}

						</Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
			}

		</>
	);

};

Entities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default Entities;
