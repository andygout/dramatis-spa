import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
	creditedMembers: ImmutablePropTypes.list.isRequired
};

export default PrependedCreditedMembers;
