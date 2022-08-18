import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink } from '.';

const PrependedAward = props => {

	const { award } = props;

	return (
		<React.Fragment>

			<InstanceLink instance={award} />

			<React.Fragment>{': '}</React.Fragment>

		</React.Fragment>
	);

};

PrependedAward.propTypes = {
	award: ImmutablePropTypes.map.isRequired
};

export default PrependedAward;
