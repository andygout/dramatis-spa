import PropTypes from 'prop-types';
import React from 'react';

import { ProducerCredits } from '.';

const AppendedProducerCredits = props => {

	const { credits } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' … '}</React.Fragment>

			<ProducerCredits credits={credits} />

		</React.Fragment>
	);

};

AppendedProducerCredits.propTypes = {
	credits: PropTypes.array.isRequired
};

export default AppendedProducerCredits;
