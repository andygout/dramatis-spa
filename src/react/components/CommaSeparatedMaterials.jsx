import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { MaterialLinkWithContext } from './index.js';

const CommaSeparatedMaterials = props => {

	const { materials } = props;

	return (
		<>

			{
				materials
					.map((material, index) =>
						<Fragment key={index}>

							<MaterialLinkWithContext material={material} />

						</Fragment>
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
