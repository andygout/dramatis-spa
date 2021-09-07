import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { CommaSeparatedInstanceLinks } from '.';

const PrependedCreditedMembers = props => {

	const { creditedMembers } = props;

	return (
		<React.Fragment>

			<CommaSeparatedInstanceLinks instances={creditedMembers} />

			<React.Fragment>&nbsp;for&nbsp;</React.Fragment>

		</React.Fragment>
	);

};

PrependedCreditedMembers.propTypes = {
	creditedMembers: PropTypes.instanceOf(List).isRequired
};

export default PrependedCreditedMembers;
