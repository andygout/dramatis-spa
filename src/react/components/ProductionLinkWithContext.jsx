import AppendedProductionDates from './AppendedProductionDates.jsx';
import AppendedVenue from './AppendedVenue.jsx';
import InstanceLink from './InstanceLink.jsx';
import PrependedSurInstance from './PrependedSurInstance.jsx';

const ProductionLinkWithContext = props => {

	const { production } = props;

	return (
		<>

			{
				production.surProduction?.surProduction && (
					<PrependedSurInstance surInstance={production.surProduction.surProduction} />
				)
			}

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

		</>
	);

};

export default ProductionLinkWithContext;
