import PropTypes from 'prop-types';
import React from 'react';

import { MaterialLinkWithContext } from '.';

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
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</>
	);

};

CommaSeparatedMaterials.propTypes = {
	materials: PropTypes.array.isRequired
};

export default CommaSeparatedMaterials;
