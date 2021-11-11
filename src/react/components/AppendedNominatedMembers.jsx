import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { CommaSeparatedInstanceLinks } from '.';

const AppendedNominatedMembers = props => {

	const { nominatedMembers } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;(</React.Fragment>

			<CommaSeparatedInstanceLinks instances={nominatedMembers} />

			<React.Fragment>)</React.Fragment>

		</React.Fragment>
	);

};

AppendedNominatedMembers.propTypes = {
	nominatedMembers: PropTypes.instanceOf(List).isRequired
};

export default AppendedNominatedMembers;
