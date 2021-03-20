import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
	creditedMembers: ImmutablePropTypes.list.isRequired
};

export default AppendedCreditedMembers;
