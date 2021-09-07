import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { CommaSeparatedInstanceLinks } from '.';

const AppendedCreditedMembers = props => {

	const { creditedMembers } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;(</React.Fragment>

			<CommaSeparatedInstanceLinks instances={creditedMembers} />

			<React.Fragment>)</React.Fragment>

		</React.Fragment>
	);

};

AppendedCreditedMembers.propTypes = {
	creditedMembers: PropTypes.instanceOf(List).isRequired
};

export default AppendedCreditedMembers;
