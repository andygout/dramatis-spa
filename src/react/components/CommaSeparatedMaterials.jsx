import { Fragment } from 'react';

import MaterialLinkWithContext from './MaterialLinkWithContext.jsx';

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

export default CommaSeparatedMaterials;
