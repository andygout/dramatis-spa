import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { WritingCredits } from '.';

const AppendedWritingCredits = props => {

	const { writingCredits } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;</React.Fragment>

			<WritingCredits writingCredits={writingCredits} isAppendage={true} />

		</React.Fragment>
	);

};

AppendedWritingCredits.propTypes = {
	writingCredits: PropTypes.instanceOf(List).isRequired
};

export default AppendedWritingCredits;
