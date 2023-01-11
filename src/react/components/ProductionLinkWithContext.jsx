import PropTypes from 'prop-types';
import React from 'react';

import { AppendedProductionDates, AppendedVenue, InstanceLink, PrependedSurInstance } from '.';

const ProductionLinkWithContext = props => {

	const { production } = props;

	return (
		<React.Fragment>

			{
				production.surProduction && (
					<PrependedSurInstance surInstance={production.surProduction} />
				)
			}

			<InstanceLink instance={production} />

			{
				production.venue && (
					<AppendedVenue venue={production.venue} />
				)
			}

			{
				production.subVenue && (
					<AppendedVenue venue={production.subVenue} />
				)
			}

			{
				(production.startDate || production.endDate) && (
					<AppendedProductionDates
						startDate={production.startDate}
						endDate={production.endDate}
					/>
				)
			}

		</React.Fragment>
	);

};

ProductionLinkWithContext.propTypes = {
	production: PropTypes.object.isRequired
};

export default ProductionLinkWithContext;
