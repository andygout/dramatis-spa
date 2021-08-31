import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { CreditedEntities } from '.';

const AppendedCoCreditedEntities = props => {

	const { coCreditedEntities } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;(with&nbsp;</React.Fragment>

			<CreditedEntities creditedEntities={coCreditedEntities} />

			<React.Fragment>)</React.Fragment>

		</React.Fragment>
	);

};

AppendedCoCreditedEntities.propTypes = {
	coCreditedEntities: PropTypes.instanceOf(List).isRequired
};

export default AppendedCoCreditedEntities;
