import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
	writingCredits: ImmutablePropTypes.list.isRequired
};

export default AppendedWritingCredits;
