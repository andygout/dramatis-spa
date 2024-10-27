import PropTypes from 'prop-types';

import { AppendedProductionTeamCredits, ProductionLinkWithContext, ListWrapper } from './index.js';

const CreativeProductionsList = props => {

	const { productions } = props;

	return (
		<ListWrapper>

			{
				productions.map((production, index) =>
					<li key={index}>

						<ProductionLinkWithContext production={production} />

						{
							production.creativeCredits?.length > 0 && (
								<AppendedProductionTeamCredits credits={production.creativeCredits} />
							)
						}

					</li>
				)
			}

		</ListWrapper>
	);

};

CreativeProductionsList.propTypes = {
	productions: PropTypes.array.isRequired
};

export default CreativeProductionsList;
