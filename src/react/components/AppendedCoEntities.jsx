import PropTypes from 'prop-types';
import React from 'react';

import { Entities } from '.';

const AppendedCoEntities = props => {

	const { coEntities } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' (with '}</React.Fragment>

			<Entities entities={coEntities} />

			<React.Fragment>{')'}</React.Fragment>

		</React.Fragment>
	);

};

AppendedCoEntities.propTypes = {
	coEntities: PropTypes.array.isRequired
};

export default AppendedCoEntities;
