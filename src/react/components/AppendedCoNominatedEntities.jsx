import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { NominatedEntities } from '.';

const AppendedCoNominatedEntities = props => {

	const { coNominatedEntities } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;(with&nbsp;</React.Fragment>

			<NominatedEntities nominatedEntities={coNominatedEntities} />

			<React.Fragment>)</React.Fragment>

		</React.Fragment>
	);

};

AppendedCoNominatedEntities.propTypes = {
	coNominatedEntities: PropTypes.instanceOf(List).isRequired
};

export default AppendedCoNominatedEntities;
