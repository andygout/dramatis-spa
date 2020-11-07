import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { WriterGroups } from '.';

const AppendedWriterGroups = props => {

	const { writerGroups } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;</React.Fragment>

			<WriterGroups writerGroups={writerGroups} isAppendage={true} />

		</React.Fragment>
	);

};

AppendedWriterGroups.propTypes = {
	writerGroups: ImmutablePropTypes.list.isRequired
};

export default AppendedWriterGroups;
