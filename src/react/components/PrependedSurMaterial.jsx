import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink } from '.';

const PrependedSurMaterial = props => {

	const { surMaterial } = props;

	return (
		<React.Fragment>

			<InstanceLink instance={surMaterial} />

			<React.Fragment>{': '}</React.Fragment>

		</React.Fragment>
	);

};

PrependedSurMaterial.propTypes = {
	surMaterial: PropTypes.object.isRequired
};

export default PrependedSurMaterial;
