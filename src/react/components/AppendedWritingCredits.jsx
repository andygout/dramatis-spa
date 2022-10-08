import PropTypes from 'prop-types';
import React from 'react';

import { WritingCredits } from '.';

const AppendedWritingCredits = props => {

	const { credits } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' '}</React.Fragment>

			<WritingCredits credits={credits} isAppendage={true} />

		</React.Fragment>
	);

};

AppendedWritingCredits.propTypes = {
	credits: PropTypes.array.isRequired
};

export default AppendedWritingCredits;
