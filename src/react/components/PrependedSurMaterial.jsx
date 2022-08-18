import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
	surMaterial: ImmutablePropTypes.map.isRequired
};

export default PrependedSurMaterial;
