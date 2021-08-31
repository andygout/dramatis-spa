import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink } from '.';

const PrependedAward = props => {

	const { award } = props;

	return (
		<React.Fragment>

			<InstanceLink instance={award} />

			<React.Fragment>:&nbsp;</React.Fragment>

		</React.Fragment>
	);

};

PrependedAward.propTypes = {
	award: PropTypes.instanceOf(Map).isRequired
};

export default PrependedAward;
