import PropTypes from 'prop-types';
import React from 'react';

import { MaterialLinkWithContext } from './index.js';

const CommaSeparatedMaterials = props => {

	const { materials } = props;

	return (
		<>

			{
				materials
					.map((material, index) =>
						<React.Fragment key={index}>

							<MaterialLinkWithContext material={material} />

						</React.Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
			}

		</>
	);

};

CommaSeparatedMaterials.propTypes = {
	materials: PropTypes.array.isRequired
};

export default CommaSeparatedMaterials;
