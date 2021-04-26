import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { ProducerCredits } from '.';

const AppendedProducerCredits = props => {

	const { credits } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;…&nbsp;</React.Fragment>

			<ProducerCredits credits={credits} />

		</React.Fragment>
	);

};

AppendedProducerCredits.propTypes = {
	credits: ImmutablePropTypes.list.isRequired
};

export default AppendedProducerCredits;
