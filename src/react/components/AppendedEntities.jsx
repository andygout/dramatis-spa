import PropTypes from 'prop-types';
import React from 'react';

import { Entities } from '.';

const AppendedEntities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' … '}</React.Fragment>

			<Entities entities={entities} />

		</React.Fragment>
	);

};

AppendedEntities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default AppendedEntities;
