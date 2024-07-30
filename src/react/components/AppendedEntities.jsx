import PropTypes from 'prop-types';
import React from 'react';

import { Entities } from './index.js';

const AppendedEntities = props => {

	const { entities } = props;

	return (
		<>

			<>{' … '}</>

			<Entities entities={entities} />

		</>
	);

};

AppendedEntities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default AppendedEntities;
