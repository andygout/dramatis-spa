import PropTypes from 'prop-types';

import { ListWrapper, ProductionLinkWithContext } from './index.js';

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
	productions: PropTypes.array.isRequired
};

export default ProductionsList;
