import PropTypes from 'prop-types';

import ProducerCredits from './ProducerCredits.jsx';
import ProductionLinkWithContext from './ProductionLinkWithContext.jsx';
import ListWrapper from './ListWrapper.jsx';

const ProducerProductionsList = props => {

	const { productions } = props;

	return (
		<ListWrapper>

			{
				productions.map((production, index) =>
					<li key={index}>

						<ProductionLinkWithContext production={production} />

						{
							production.producerCredits?.length > 0 && (
								<>

									<>{' … '}</>

									<ProducerCredits credits={production.producerCredits} />

								</>
							)
						}

					</li>
				)
			}

		</ListWrapper>
	);

};

ProducerProductionsList.propTypes = {
	productions: PropTypes.array.isRequired
};

export default ProducerProductionsList;
