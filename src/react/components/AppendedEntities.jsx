import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { Entities } from '.';

const AppendedEntities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;…&nbsp;</React.Fragment>

			<Entities entities={entities} />

		</React.Fragment>
	);

};

AppendedEntities.propTypes = {
	entities: PropTypes.instanceOf(List).isRequired
};

export default AppendedEntities;
