import PropTypes from 'prop-types';
import React from 'react';

import { ProducerCredits, ProductionLinkWithContext, ListWrapper } from '.';

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
								<React.Fragment>

									<React.Fragment>{' … '}</React.Fragment>

									<ProducerCredits credits={production.producerCredits} />

								</React.Fragment>
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
