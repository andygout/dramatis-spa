import PropTypes from 'prop-types';
import React from 'react';

import { ListWrapper, ProductionLinkWithContext } from '.';

const ProductionsList = props => {

	const { productions } = props;

	return (
		<ListWrapper>

			{
				productions.map((production, index) =>
					<li key={index}>

						<ProductionLinkWithContext production={production} />

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
