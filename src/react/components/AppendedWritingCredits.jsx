import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
	credits: ImmutablePropTypes.list.isRequired
};

export default AppendedWritingCredits;
