import PropTypes from 'prop-types';
import React from 'react';

import { ListWrapper, MaterialLinkWithContext } from '.';

const MaterialsList = props => {

	const { materials, isNested } = props;

	return (
		<ListWrapper isNested={isNested}>

			{
				materials.map((material, index) =>
					<li key={index}>

						<MaterialLinkWithContext material={material} />

						{
							material.subMaterials?.length > 0 && (
								<MaterialsList materials={material.subMaterials} isNested={true} />
							)
						}

					</li>
				)
			}

		</ListWrapper>
	);

};

MaterialsList.propTypes = {
	materials: PropTypes.array.isRequired,
	isNested: PropTypes.bool
};

export default MaterialsList;
