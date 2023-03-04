import PropTypes from 'prop-types';
import React from 'react';

import { ListWrapper, ProductionLinkWithContext } from '.';

const ProductionsList = props => {

	const { productions, isNested } = props;

	return (
		<ListWrapper isNested={isNested}>

			{
				productions.map((production, index) =>
					<li key={index}>

						<ProductionLinkWithContext production={production} />

						{
							production.subProductions?.length > 0 && (
								<ProductionsList productions={production.subProductions} isNested={true} />
							)
						}

					</li>
				)
			}

		</ListWrapper>
	);

};

ProductionsList.propTypes = {
	productions: PropTypes.array.isRequired,
	isNested: PropTypes.bool
};

export default ProductionsList;
